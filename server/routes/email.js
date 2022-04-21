const express = require("express");
const { isLoggedIn, initSession } = require("./auth");
const nodemailer = require('nodemailer');

const router = express.Router();

router.use(express.json());
initSession(router);

// send email
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'biljettsystemet@gmail.com',
        pass: 'biljett123'
    }
});

const sendEmail = (to, subject, text) => {
    var mailOptions = {
        from: 'biljettsystemet@gmail.com',
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("Error sending email: " + error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
}


/**
 * @swagger
 * /api/email/sendEmail:
 *   post:
 *     tags: [email]
 *     security:
 *       - oAuth:
 *         - logged_in
 *     description: Send email to email address.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               subject:
 *                 type: string
 *               text:
 *                 type: string
 *     responses:
 *       200:
 *         description: Email has been successfully sent!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 subject:
 *                   type: string
 *                 text:
 *                   type: string
*/
router.post("/sendEmail", isLoggedIn, async (req, res) => {
    const { subject, text } = req.body;
    const email = req.user.email;

    sendEmail(email, subject, text);

    return res.status(200).json({
        ok: true,
    });
});

module.exports = router;
