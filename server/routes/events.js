const express = require("express");
const router = express.Router();
const pool = require("../db");

router.use(express.json());

/**
 * @swagger
 * /events/GetAll:
 *   get:
 *     description: Get all events
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
    try {
        const getEvents = await pool.query(`
        SELECT events.eventid, shorttitle, longtitle, description, price, starttime, 
            location, address, coordinates, eventpicturelink, availabletickets, numtick FROM events 
            INNER JOIN availabletickets a on events.eventid = a.eventid`);
        const formatted = getEvents.rows.map(row => 
            ({ ...row, coordinates: `https://www.google.com/maps/search/?api=1&query=${row.coordinates.x}%2C${row.coordinates.y}`}));
        res.status(200).json(formatted);
    } catch (err) {
        res.status(503).json({ error: "Database connection failed." });
    }
});

/**
 * @swagger
 * /events/{eventId}:
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
        const getEvent = await pool.query(`SELECT
            events.eventid, shorttitle, longtitle, description, price, starttime, 
            location, address, coordinates, eventpicturelink, availabletickets, numtick
            FROM events INNER JOIN availabletickets a on events.eventid = a.eventid 
            WHERE events.eventid=$1`, [eventId]);

        if (getEvent.rows[0]) {
            const row = getEvent.rows[0];
            const formatted = { ...row, coordinates: `https://www.google.com/maps/search/?api=1&query=${row.coordinates.x}%2C${row.coordinates.y}` };
            res.status(200).json(formatted);
        } else {
            res.status(404).json({ error: "Event does not exist" });
        }

    } catch (err) {
        res.status(503).json({ error: "Database connection failed." });
    }
});


/**
 * @swagger
 * /events/{eventId}:
 *   put:
 *     description: Updates a unique event with description or image
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
 *     requestBody:
 *       description: Event to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               shorttitle:
 *                 type: string
 *               longtitle:
 *                 type: string
 *               description:
 *                 type: string
 *               location:
 *                 type: string
 *               numtick:
 *                 type: integer
 *               eventpicturelink:
 *                 type: string
 *               starttime:
 *                 type: string
 *                 format: date-time
 *               address:
 *                 type: string
 *               price:
 *                 type: integer
 *               coordinates:
 *                 type: object
 *                 properties:
 *                   x:
 *                     type: integer
 *                   y:
 *                     type: integer
 *     responses:
 *       200:
 *         description: Database updated
 *       503:
 *         description: Error
 */
router.put("/events/:eventId", async (req, res) => {
    const { eventId } = req.params;
    const body = req.body;

    if (!eventId) res.status(400).json({ error: "Parameter is missing." });
    if (!body) res.status(400).json({ error: "Body is missing." });

    try {
        const putEvents = await pool.query(`
            UPDATE events SET
            shorttitle = $1,
            longtitle = $2,
            description = $3,
            location = $4,
            numtick = $5,
            eventpicturelink = $6,
            starttime = $7,
            address = $8,
            price = $9,
            coordinates = $10
            WHERE eventid = $11`,
            [body.shorttitle, body.longtitle, body.description, body.location, body.numtick, 
             body.eventpicturelink, body.starttime, body.address, body.price, 
             `${body.coordinates.x},${body.coordinates.y}`, eventId]);

        res.status(200).json({ message: "Updated database" });
    } catch (err) {
        res.status(503).json({ error: "Database connection failed." });
    }
});

module.exports = router;
