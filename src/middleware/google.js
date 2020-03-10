const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy(
  {
    clientID: '628613177586-38emulicns5ii00tv4ovje6pa1h9dnea.apps.googleusercontent.com',
    clientSecret: 'QbWHfqafDk-5wKUtP2IdheKJ',
    callbackURL: 'http://localhost:3334/callback-google',
  },
  (accessToken, refreshToken, profile, done) => {
    // console.log('accessToken: ', accessToken);
    // console.log('refreshToken: ', refreshToken);

    // TODO: gravar usuário no banco de dados
    console.log('profile: ', profile);

    return done(null, profile.displayName);
  },
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports = passport;
