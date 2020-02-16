const BaseResource = require('./BaseResouce');
const AuthorRepository = require('../repository/AuthorRepository');

class AuthorResource extends BaseResource {
  constructor() {
    super(AuthorRepository);
  }
}

module.exports = new AuthorResource();
