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

router.get('/auth/login', (req, res) => {
    res.send('<a href="/auth/google">Authenticate with Google</a>');
});

router.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] }
    ));

router.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/protected',
        failureRedirect: '/auth/google/failure'
    })
);

router.get('/protected', isLoggedIn, (req, res) => {
    res.send(`Hello ${req.user.displayName}`);
});

router.get('/protected1', isLoggedIn, (req, res) => {
    res.send(`Helloasdas ${req.user.displayName}`);
});

router.get('/auth/logout', (req, res) => {
    req.logout();
    req.session.destroy();
});

router.get('/auth/google/failure', (req, res) => {
    res.send('Failed to authenticate..');
});


exports.authRouter = router;
exports.isLoggedIn = isLoggedIn;
// module.exports = router;
