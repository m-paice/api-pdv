const BaseController = require('./BaseController');

const CommentResource = require('../resource/CommentResource');

class CommentController extends BaseController {
  constructor() {
    super(CommentResource, 'comments');
  }

  routes() {
    const routes = super.routes();

    return routes;
  }
}

module.exports = new CommentController();
