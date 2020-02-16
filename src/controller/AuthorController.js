const BaseController = require('./BaseController');

const authorResource = require('../resource/AuthorResource');

class AuthorController extends BaseController {
  constructor() {
    super(authorResource, 'authors');
  }

  routes() {
    const routes = super.routes();

    return routes;
  }
}

module.exports = new AuthorController();
