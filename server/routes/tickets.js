const express = require("express");
const router = express.Router();
const pool = require("../db");

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
 * /tickets/GetAllAvailable:
 *     get:
 *       description: Operation to Fetch All Tickets
 *       tags: [ticket]
 *       responses:
 *         '200':
 *           description: Success Response
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/EventTicketInfo'
 */
router.get("/tickets/GetAllAvailable", async (req, res) => {
    try {
        const getTickets = await pool.query(`
            SELECT eventid, availabletickets, price FROM availableTickets NATURAL JOIN events`);
        
        res.status(200).json(getTickets.rows);
    } catch (err) {
        res.status(503).json({ error: "Database connection failed." });
    }
});


/**
 * @swagger
 * /tickets/getByEvent/{eventID}:
 *   get:
 *     description: Operation to Fetch All Tickets for Single Event
 *     tags: [ticket]
 *     parameters:
 *       - in: path
 *         name: eventID
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Success Response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/EventTicketInfo'
 */
router.get("/tickets/GetByEvent/:eventId", async (req, res) => {
    const { eventId } = req.params;
    
    if (!eventId) res.status(400).json({ error: "Parameter is missing." });

    try {
        const getTicket = await pool.query(`
            SELECT eventid, availabletickets, price FROM availableTickets NATURAL JOIN events WHERE eventid=$1`, [eventId]);
        
        if (getTicket.rowCount == 0) res.status(404).json({ error: "No results found." });

        res.status(200).json(getTicket.rows[0]);
    } catch (err) {
        res.status(503).json({ error: "Database connection failed." });
    }
});



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
        const getTicket = await pool.query(`
            SELECT * FROM tickets NATURAL JOIN Purchases WHERE ticketid=$1`, [ticketId]);
        
        if (getTicket.rowCount == 0) res.status(404).json({ error: "No results found." });
        
        res.status(200).json(getTicket.rows[0]);
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
    
    if (!userId) res.status(400).json({ error: "userId is missing." });
    if (!eventId) res.status(400).json({ error: "eventId is missing." });
    if (!boughtTickets) res.status(400).json({ error: "boughtTickets is missing." });

    // format: 2022-02-27 21:00:00
    let purchaseTime = new Date();
    purchaseTime = purchaseTime.toLocaleString('sv-SE', {timeZone: "Europe/Stockholm"});

    try {
        const insertPurchase = await pool.query(`
            INSERT INTO Purchases (UserID, EventID, PurchaseTime) VALUES ($1, $2, $3) RETURNING purchaseid`,
            [userId, eventId, purchaseTime]);

        const purchaseID = insertPurchase.rows[0].purchaseid;
        
        for (let i = 0; i < boughtTickets; i++) {
            const insertTicket = await pool.query(`
                INSERT INTO Tickets (PurchaseID) VALUES ($1)`,
                [purchaseID]);
        }
        
        res.status(200).json({ message: "Updated database" });
    } catch (err) {
        res.status(503).json({ error: "Database connection failed." });
    }
});


module.exports = router;
