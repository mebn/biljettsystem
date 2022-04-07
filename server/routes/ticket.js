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
 *       '201':
 *         description: Ticket has been successfully purchased!
 */
router.post("/tickets/buyTickets", async (req, res) => {
  const { eventId, tickets } = req.body;

  // TODO: Replace with session user
  const userId = 1;

  let purchaseTime = new Date();

  try {
    await prisma.$transaction(async (prisma) => {
      let order = await prisma.order.create({
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

    res.status(200).json({ message: "Database updated." });
  } catch (err) {
    res.status(503).json({ message: err.message });
  }
});

module.exports = router;
