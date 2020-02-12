const BaseRepository = require('./BaseRepository');

const { sequelize } = require('../models');

class WebhookRepository extends BaseRepository {
  constructor() {
    super(sequelize.models.webhooks);
  }
}

module.exports = new WebhookRepository();
