const jwt = require('jsonwebtoken');
const passport = require('../middleware/google');
const BaseController = require('./BaseController');

const authorResource = require('../resource/AuthorResource');

const auth = require('../middleware/auth');

class AuthorController extends BaseController {
  constructor() {
    super(authorResource, 'authors');

    this.authorResource = authorResource;
  }

  // eslint-disable-next-line class-methods-use-this
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const isAuthor = await authorResource.findOne({
        where: {
          username,
          password,
        },
      });

      if (!isAuthor) {
        return res.status(500).json({
          message: 'author not found',
        });
      }

      const token = jwt.sign({ id: isAuthor.id }, process.env.JWT_SECRET);

      return res.json({
        token,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  async me(req, res) {
    const { userId } = req;
    const { query } = req;
    try {
      const response = await this.authorResource.findById(userId, query);

      return res.json(response);
    } catch (error) {
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  // authGoogle(req, res) {}

  // callbackGoogle(req, res) {}

  routes() {
    const routes = super.routes();

    routes.post('/auth', this.login.bind(this));
    routes.get('/me', auth, this.me.bind(this));
    // google auth
    routes.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    }));
    routes.get('/callback-google', passport.authenticate('google', {
      failureRedirect: '/error',
    }), (req, res) => res.json({ message: 'OK' }));

    routes.get('/error', (req, res) => res.send('Error callback'));

    return routes;
  }
}

module.exports = new AuthorController();
