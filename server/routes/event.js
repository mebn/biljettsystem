const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();
const prisma = new PrismaClient();

router.use(express.json());

const selectData = {
  id: true,
  shortTitle: true,
  longTitle: true,
  description: true,
  price: true,
  startTime: true,
  location: {
    select: {
      id: false,
      title: true,
      address: true,
      lat: true,
      lng: true,
    },
  },
};

/**
 * @swagger
 * /event/GetAll:
 *   get:
 *     description: Get all event
 *     tags: [event]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful Response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Event'
 *       503:
 *         description: Error
 */
router.get("/event/GetAll", async (req, res) => {
  const events = await prisma.event.findMany({
    select: selectData,
  });

  const formatted = events.map((event) => ({
    ...event,
    locationUrl: `https://www.google.com/maps/search/?api=1&query=${event.location.lat}%2C${event.location.lng}`,
  }));

  res.status(200).json(formatted);
});

/**
 * @swagger
 * /event/{eventId}:
 *   get:
 *     description: Fetch single event by ID
 *     tags: [event]
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: eventId
 *        description: ID of event that needs to be fetched
 *        required: true
 *        schema:
 *          type: integer
 *          format: int32
 *     responses:
 *       200:
 *         description: Successful Response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Event'
 *       404:
 *         description: Event not found
 *       503:
 *         description: Error
 */
router.get("/event/:eventId", async (req, res) => {
  const { eventId } = req.params;

  if (!eventId) res.status(400).json({ error: "Parameter is missing." });

  try {
    const parsed = parseInt(eventId);
    const event = await prisma.event.findFirst({
      where: { id: parsed },
      select: selectData,
    });

    if (event) {
      const formatted = {
        ...event,
        locationUrl: `https://www.google.com/maps/search/?api=1&query=${event.location.lat}%2C${event.location.lng}`,
      };

      res.status(200).json(formatted);
    } else {
      res.status(404).json({});
    }
  } catch (err) {
    res.status(503).json({ error: "Database connection failed." });
  }
});

module.exports = router;
