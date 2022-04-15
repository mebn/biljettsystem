const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

router.use(express.json());

/**
 * @swagger
 * components:
 *   schemas:
 *     EventTicketInfo:
 *       type: object
 *       properties:
 *          eventid:
 *            type: integer
 *          availabletickets:
 *             type: integer
 *          price:
 *             type: integer
 *     Ticket:
 *       type: object
 *       properties:
 *          purchaseid:
 *            type: integer
 *          ticketid:
 *             type: integer
 *          userid:
 *             type: integer
 *          eventid:
 *             type: integer
 *          purchasetime:
 *             type: string
 *             format: date-time
 */

const toSelect = {
  id: true,
  event: { select: { id: true, longTitle: true, startTime: true } },
  tickets: {
    select: {
      ticketType: {
        select: { title: true, price: true },
      },
    },
  },
};

/**
 * @swagger
 * /tickets/buyTickets:
 *   post:
 *     tags: [ticket]
 *     description: Operation to buy one or several ticket(s)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               eventId:
 *                 type: integer
 *               tickets:
 *                 type: array
 *                 items:
 *                   properties:
 *                     ticketTypeId:
 *                       type: integer
 *                     number:
 *                       type: integer
 *     responses:
 *       "201":
 *         description: Ticket has been successfully purchased!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 order:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     event:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: integer
 *                         longTitle:
 *                           type: string
 *                         startTime:
 *                           type: string
 *                     tickets:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           price:
 *                             type: number
 *                           purchased:
 *                             type: number
 *                           name:
 *                             type: string
*/
router.post("/tickets/buyTickets", async (req, res) => {
  const { eventId, tickets } = req.body;

  // TODO: Replace with session user
  const userId = 1;

  let purchaseTime = new Date();
  let order;

  try {
    await prisma.$transaction(async (prisma) => {
      order = await prisma.order.create({
        data: { userId: userId, eventId: eventId, purchaseTime: purchaseTime },
      });

      for (const ticket of tickets) {
        const ticketType = await prisma.ticketType.findFirst({
          where: { id: ticket.ticketTypeId },
        });

        if (ticketType.eventId !== eventId) {
          throw new Error(`Tickets must be for the same event`);
        }

        const bought = await prisma.ticket.count({
          where: { ticketTypeId: ticketType.id },
        });

        const available = ticketType.numTickets - bought;

        if (ticket.number > available) {
          throw new Error(`Not enough tickets`);
        }

        for (let i = 0; i < ticket.number; i++) {
          await prisma.ticket.create({
            data: { orderId: order.id, ticketTypeId: ticketType.id },
          });
        }
      }
    });


    // Find the order that was completed
    let completedOrder = await prisma.order.findFirst({
      where: { id: order.id },
      select: toSelect,
    });

    // Format and return tickets in a nice format
    let purchasedTickets = completedOrder.tickets.reduce((acc, ticket) => {
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

    // Return purchased tickets as an array
    let ticketsAsArray = Object.keys(purchasedTickets).map(key => ({...purchasedTickets[key], name: key}))

    res.status(201).json({
      message: "Completed order",
      order: { ...completedOrder, tickets: ticketsAsArray },
    });
  } catch (err) {
    res.status(503).json({ message: err.message });
  }
});

module.exports = router;
