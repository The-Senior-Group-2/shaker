const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');

dotenv.config();

passport.serializeUser(function(user, done) {

  done(null, user);
});

passport.deserializeUser(function(user, done) {

  done(null, user);
});

passport.use(new GoogleStrategy({
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: 'http://localhost:8080/google/callback'
},
function(accessToken, refreshToken, profile, done) {

  console.info(profile);
  return done(null, profile);
}

));


