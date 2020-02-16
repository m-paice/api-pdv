const BaseRepository = require('./BaseRepository');

const { sequelize } = require('../models');

class FileRepository extends BaseRepository {
  constructor() {
    super(sequelize.models.files);
  }
}

module.exports = new FileRepository();
