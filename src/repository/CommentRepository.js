const BaseRepository = require('./BaseRepository');

const { sequelize } = require('../models');

class CommentRepository extends BaseRepository {
  constructor() {
    super(sequelize.models.comments);
  }
}

module.exports = new CommentRepository();
