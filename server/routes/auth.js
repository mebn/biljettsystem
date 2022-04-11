const express = require("express");
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
require('../passportStrategy');

router.use(express.json());


function isLoggedIn(req, res, next) {
    req.user ? next() : res.sendStatus(401);
}

router.use(session({ secret: 'cats', resave: false, saveUninitialized: true }));
router.use(passport.initialize());
router.use(passport.session());


/**
 * @swagger
 * /auth/login:
 *   get:
 *     description: Provides a link to sign in with google.
 *     tags: [auth]
 *     responses:
 *       '200':
 *         description: Successful Response
 */
router.get('/auth/login', (req, res) => {
    res.status(200).send('<a href="/auth/google">Authenticate with Google</a>');
});


/**
 * @swagger
 * /auth/google:
 *   get:
 *     description: Send user to google login page.
 *     tags: [auth]
 */
router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));


/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     description: Redirects user to /protected on successful login and /auth/google/failure on unsuccessful login.
 *     tags: [auth]
 */
router.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/google/failure'
    })
);


/**
 * @swagger
 * /protected:
 *   get:
 *     description: A protected route only for logged in users.
 *     tags: [auth]
 *     security:
 *       - oAuth:
 *          - logged_in
 *     responses:
 *       '200':
 *         description: Successful Response
 */
router.get('/protected', isLoggedIn, (req, res) => {
    res.status(200).send(`Hello ${req.user.displayName}`);
});


/**
 * @swagger
 * /auth/logout:
 *   get:
 *     description: Lets a user logout
 *     tags: [auth]
 *     responses:
 *       '200':
 *         description: Successful Response
 */
router.get('/auth/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.status(200).send("logged out");
});

/**
 * @swagger
 * /auth/google/failure:
 *   get:
 *     description: Failed to login
 *     tags: [auth]
 *     responses:
 *       '200':
 *         description: Successful Response
 */
router.get('/auth/google/failure', (req, res) => {
    res.status(200).send('Failed to authenticate..');
});


exports.authRouter = router;
exports.isLoggedIn = isLoggedIn;
