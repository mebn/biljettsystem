const session = require('express-session');

const mySession = session({
    secret: 'cats',
    resave: false,
    saveUninitialized: true
})

module.exports = mySession;