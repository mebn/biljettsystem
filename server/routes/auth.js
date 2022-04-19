const express = require("express");
const router = express.Router();
const session = require('express-session');
const passport = require('passport');
const CLIENT_URL = "http://localhost:3000/"

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
//  router.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }));
router.get('/auth/google/', (req, res, next) => {
    if (req.query.return) req.session.oauth2return = req.query.return;
    next();
}, passport.authenticate('google', { scope: ['email', 'profile'] }));


/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     description: Redirects user to /protected on successful login and /auth/google/failure on unsuccessful login.
 *     tags: [auth]
 */
 router.get('/auth/google/callback',
 passport.authenticate('google'), (req, res) => {
     console.log(req,res)
     const redirect = req.session.oauth2return || '/'
     delete req.session.oauth2return;
     res.redirect(redirect);
 }
);


/**
 * @swagger
 * /auth/login/success:
 *   get:
 *     description: Checks whether or not user is logged in
 *     tags: [auth]
 */
router.get('/auth/login/success', (req, res) => {
    if (req.user) return res.json({
        ok: true,
        user: req.user,
    });
    
    return res.status(401).json({
        ok: false,
    });
});


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
