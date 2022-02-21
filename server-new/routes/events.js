const express = require("express");
const router = express.Router();
const pool = require("../db");

router.use(express.json());

router.get("/events", async (req, res) => {
    try {
        const getEvents = await pool.query(`SELECT * FROM events;`);
        res.status(200).json(getEvents.rows);
    } catch (err) {
        res.status(503).json({error: "Database connection failed."});
    }
});

// docker-compose up db --build

module.exports = router;

/*
docker ps -a
docker exec -it 01092766d50a bash
psql -U postgres
\c pvk_db_dummy


*/