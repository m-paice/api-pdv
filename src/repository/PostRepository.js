const BaseRepository = require('./BaseRepository');

const { sequelize } = require('../models');

class PostRepository extends BaseRepository {
  constructor() {
    super(sequelize.models.posts);
  }
}

module.exports = new PostRepository();
