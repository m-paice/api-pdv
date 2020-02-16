const BaseController = require('./BaseController');

const commentResource = require('../resource/CommentResource');

class CommentController extends BaseController {
  constructor() {
    super(commentResource, 'comments');
  }

  routes() {
    const routes = super.routes();

    return routes;
  }
}

module.exports = new CommentController();
