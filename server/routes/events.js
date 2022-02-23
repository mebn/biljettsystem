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
router.get("/events/GetAll", async (req, res) => {
    try {
        const getEvents = await pool.query(`
            SELECT events.eventid, title, description, price, starttime, location, eventpicturelink, availabletickets, numtick FROM events 
            INNER JOIN availabletickets a on events.eventid = a.eventid`);
        
        res.status(200).json(getEvents.rows);
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
 *       503:
 *         description: Error
 */
router.get("/events/:eventId", async (req, res) => {
    const { eventId } = req.params;

    if (!eventId) res.status(400).json({ error: "Parameter is missing." });

    try {
        const getEvent = await pool.query(`SELECT
            events.eventid, title, description, price, starttime, location, eventpicturelink, availabletickets, numtick 
            FROM events INNER JOIN availabletickets a on events.eventid = a.eventid 
            WHERE events.eventid=$1`, [eventId]);
        
        if (getEvent.rowCount == 0) res.status(404).json({ error: "No results found." });

        res.status(200).json(getEvent.rows[0]);
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
 *             $ref: '#/components/schemas/Event'
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
            title = $1,
            description = $2,
            price = $3,
            startTime = $4,
            location = $5,
            numtick = $6,
            eventpicturelink = $7
            WHERE eventid = $8`,
            [body.title, body.description, body.price, body.starttime, body.location, body.numtick, body.eventpicturelink, eventId]);

        // if (putEvents.rowCount == 0) res.status(404).json({ error: "No results found." });

        res.status(200).json({ message: "Updated database" });
    } catch (err) {
        res.status(503).json({ error: "Database connection failed." });
    }
});

module.exports = router;
