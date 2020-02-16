const BaseResource = require('./BaseResouce');
const CommentRepository = require('../repository/CommentRepository');

class CommentResource extends BaseResource {
  constructor() {
    super(CommentRepository);
  }
}

module.exports = new CommentResource();
