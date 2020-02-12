const BaseResource = require('./BaseResouce');
const webhookRepository = require('../repository/WebhookRepository');

class WebhookResource extends BaseResource {
  constructor() {
    super(webhookRepository);
  }
}

module.exports = new WebhookResource();
