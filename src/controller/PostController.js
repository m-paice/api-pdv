const BaseController = require('./BaseController');

const PostResource = require('../resource/PostResource');

class PostController extends BaseController {
  constructor() {
    super(PostResource, 'posts');
  }

  routes() {
    const routes = super.routes();

    return routes;
  }
}

module.exports = new PostController();
