const BaseResource = require('./BaseResouce');
const PostRepository = require('../repository/PostRepository');

class PostResource extends BaseResource {
  constructor() {
    super(PostRepository);
  }
}

module.exports = new PostResource();
