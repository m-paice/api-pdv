const BaseRepository = require('./BaseRepository');

const { sequelize } = require('../models');

class AuthorRepository extends BaseRepository {
  constructor() {
    super(sequelize.models.authors);
  }
}

module.exports = new AuthorRepository();
