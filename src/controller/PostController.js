const BaseController = require('./BaseController');

const postResource = require('../resource/PostResource');

class PostController extends BaseController {
  constructor() {
    super(postResource, 'posts');
  }

  routes() {
    const routes = super.routes();

    return routes;
  }
}

module.exports = new PostController();
