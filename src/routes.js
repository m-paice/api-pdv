const { Router } = require('express');

const webhookResource = require('./resource/WebhookResource');

const routes = Router();

routes.get('/', async (req, res) => {
  try {
    const response = await webhookResource.findMany();

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
});

routes.post('/', async (req, res) => {
  const { type, driverId, webhookUrl } = req.body;

  try {
    const response = await webhookResource.create({
      type,
      driverId,
      webhookUrl,
    });

    return res.json(response);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
});

module.exports = routes;
