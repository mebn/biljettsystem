const express = require("express");
const { PrismaClient } = require("@prisma/client");
const session = require('express-session');
const passport = require('passport');
const { isLoggedIn } = require("./auth");
const nodemailer = require('nodemailer');

const prisma = new PrismaClient();
const router = express.Router();

router.use(express.json());
router.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
router.use(passport.initialize());
router.use(passport.session());

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

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}


/**
 * @swagger
 * /email/sendEmail:
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
router.post("/email/sendEmail", isLoggedIn, async (req, res) => {
    const { subject, text } = req.body;
    const email = req.user.email;

    try {
        const user = await prisma.user.findUnique({
            where: { email },
        });
    } catch (e) {
        return res.status(503).json({
            ok: false,
            message: "Database connection failed.",
        });
    }

    // send email
    sendEmail(email, subject, text);

    return res.status(200).json({
        ok: true,
    });
});

module.exports = router;
