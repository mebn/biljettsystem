const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const pool = require("./db");

// prisma stuff
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const GOOGLE_CLIENT_ID = "989957502183-ln715pltqb2jud684vurmgpu12nmdb1g.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:7050/auth/google/callback",
    passReqToCallback: true,
},
    async function (request, accessToken, refreshToken, profile, done) {
        const { displayName, email } = profile;

        try {
            // add or update user in db
            await prisma.user.upsert({
                where: {
                    email,
                },
                update: {
                    email,
                    name: displayName,
                },
                create: {
                    email,
                    name: displayName,
                },
            });
        } catch (err) {
            // db down
            return done(null, null);
        }

        return done(null, profile);
    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});