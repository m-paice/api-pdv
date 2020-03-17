const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(
  new FacebookStrategy(
    {
      clientID: '716088828925271',
      clientSecret: 'a9a3753506ca27879498abe0f9e03ef2',
      callbackURL: 'http://localhost:3334/callback-facebook',
    },
    ((accessToken, refreshToken, profile, done) => {
      console.log(profile);

      return done(null, profile);
    }),
  ),
);

module.exports = passport;
