const BaseRepository = require('./BaseRepository');

const { sequelize } = require('../models');

class CategoryRepository extends BaseRepository {
  constructor() {
    super(sequelize.models.categories);
  }
}

module.exports = new CategoryRepository();
