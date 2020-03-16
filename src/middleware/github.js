const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
  clientID: 'f850b799f233116e1755',
  clientSecret: 'c0c781f76afb29f757406fad4fcf0fcac4954b10',
  callbackURL: 'http://localhost:3334/callback-github',
},
((accessToken, refreshToken, profile, done) => {
  console.log('profile: ', profile);

  return done(null, profile.displayName);
})));

module.exports = passport;
