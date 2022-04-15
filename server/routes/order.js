const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

router.use(express.json());

const selectData = {
  event: {
    select: {
      id: true,
      shortTitle: true,
    },
  },
  id: true,
  purchaseTime: true,
  tickets: {
    select: {
      ticketType: {
        select: {
          price: true,
          title: true,
        },
      },
    },
  },
};

/**
 * @swagger
 * /orders:
 *   get:
 *     tags: [order]
 *     description: Get all orders for the logged in user
 *     responses:
 *       "200":
 *         description: Successful Response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   purchaseTime:
 *                     type: string
 *                   event:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                       shortTitle:
 *                         type: string
 *                   tickets:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                         price:
 *                           type: integer
 *                         purchased:
 *                           type: integer
 *       "403":
 *         description: Not signed in
 *       "503":
 *         description: Server error
 */
router.get("/orders", async (req, res) => {
  if (!req.user) {
    return res.status(403).json({ error: "Not signed in." });
  }

  try {
    let orders = await prisma.order.findMany({
      where: { user: { email: req.user.email } },
      select: selectData,
    });

    // Format tickets
    const formatted = orders.map((order) => {
      let tickets = order.tickets.reduce((acc, ticket) => {
        let purchased = 1;
        if (acc[ticket.ticketType.title]) {
          purchased = acc[ticket.ticketType.title].purchased + 1;
        }
        acc[ticket.ticketType.title] = {
          price: ticket.ticketType.price,
          purchased: purchased,
        };
        return acc;
      }, {});

      let ticketsAsArray = Object.keys(tickets).map((key) => ({
        ...tickets[key],
        name: key,
      }));
      return { ...order, tickets: ticketsAsArray };
    });

    // Return purchased tickets as an array
    res.status(200).json(formatted);
  } catch (err) {
    res.status(503).json({ ok: false, error: "Database connection failed." });
  }
});

module.exports = router;
