const express = require("express");
const router = express.Router();
const pool = require("../db");

router.use(express.json());

router.post("/user/addUser", async (req, res) => {
    const body = req.body;

    if (!body) res.status(400).json({ ok: false, error: "Body is missing." });

    try {
        const stmt = await pool.query(`
            INSERT INTO users (name, email)
            VALUES ($1, $2) RETURNING userid`,
            [body.name, body.email]);

        res.status(200).json({
            ok: true,
            message: "Database updated.",
            userid: stmt.rows[0].userid
        });
    } catch (err) {
        res.status(503).json({ ok: false, error: "Database connection failed." });
    }
});

module.exports = router;
