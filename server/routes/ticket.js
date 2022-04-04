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
 * /tickets/getByTicket/{ticketID}:
 *   get:
 *     description: Operation to Fetch Single Ticket from Single Event
 *     tags: [ticket]
 *     parameters:
 *       - in: path
 *         name: ticketID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Success Response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Ticket'
 */
router.get("/tickets/GetByTicket/:ticketId", async (req, res) => {
  const { ticketId } = req.params;

  if (!ticketId) res.status(400).json({ error: "Parameter is missing." });

  try {
    const parsed = parseInt(ticketId);
    const ticket = prisma.ticket.findFirst({ where: { id: ticketId } });

    if (!ticket) res.status(404).json({});

    res.status(200).json(ticket);
  } catch (err) {
    res.status(503).json({ error: "Database connection failed." });
  }
});

/**
 * @swagger
 * /tickets/buyTicket:
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
 *               userId:
 *                 type: integer
 *               eventId:
 *                 type: integer
 *               boughtTickets:
 *                 type: integer
 *             example:
 *               userId: 1
 *               eventId: 1
 *               boughtTickets: 10
 *     responses:
 *       '201':
 *         description: Ticket has been successfully purchased!
 */
router.post("/tickets/buyTicket", async (req, res) => {
  const { userId, eventId, boughtTickets } = req.body;

  if (!userId) return res.status(400).json({ error: "userId is missing." });

  if (!eventId) return res.status(400).json({ error: "eventId is missing." });

  if (!boughtTickets)
    return res.status(400).json({ error: "boughtTickets is missing." });

  // format: 2022-02-27 21:00:00
  let purchaseTime = new Date();

  const availibleTickets = await prisma.event.findMany({
    include: {
      purchases: true
    },
  });

  if (boughtTickets > availibleTickets) res.status(402)

  const newPurchase = await prisma.$transaction(async () => {
    purchase = await prisma.purchase.create({
      data: { userId: userId, eventId: eventId, purchaseTime: purchaseTime },
    });
    ticket = await prisma.ticket.createMany({
      data: { purchaseId: purchase.id },
    });
    return ticket;
  });
  res.status(200).json({ message: "Database updated." });
});

module.exports = router;