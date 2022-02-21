const express = require("express");
const router = express.Router();
const pool = require("../db");

router.use(express.json());

router.get("/events", async (req, res) => {
    try {
        const getEvents = await pool.query(`SELECT * FROM events`);
        res.status(200).json(getEvents.rows);
    } catch (err) {
        res.status(503).json({error: "Database connection failed."});
    }
});

router.get("/events/:eventId", async (req, res) => {
    const { eventId } = req.params;

    if (!eventId) res.status(400).json({error: "Parameter is missing."});

    try {
        const getEvent = await pool.query(`SELECT * FROM events WHERE eventid=${eventId}`);
        res.status(200).json(getEvent.rows[0]);
    } catch (err) {
        res.status(503).json({error: "Database connection failed."});
    }
});

router.put("/events/:eventId", async (req, res) => {
    const { eventId } = req.params;
    const body = req.body;

    if (!eventId) res.status(400).json({error: "Parameter is missing."});
    if (!body) res.status(400).json({error: "Body is missing."});

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
        
        res.status(200).json(putEvents);
    } catch (err) {
        res.status(503).json({error: "Database connection failed."});
    }
});

module.exports = router;
