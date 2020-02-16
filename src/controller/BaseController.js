const { Router } = require('express');

class BaseController {
  constructor(model, path) {
    this.model = model;
    this.path = path;
  }

  async index(req, res) {
    const { query } = req;
    try {
      const response = await this.model.findMany(query);

      return res.json({
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  async show(req, res) {
    const { id } = req.params;
    try {
      const response = await this.model.findById(id);

      return res.json({
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  async store(req, res) {
    try {
      const response = await this.model.create(req.body);

      return res.json({
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { body } = req;
    try {
      const response = await this.model.updateById(id, body);

      return res.json({
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  async destroy(req, res) {
    const { id } = req.params;
    try {
      const response = await this.model.destroyById(id);

      return res.json({
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        message: error.toString(),
      });
    }
  }

  routes() {
    const routes = Router();

    routes.get(`/${this.path}`, this.index.bind(this));
    routes.get(`/${this.path}/:id`, this.show.bind(this));
    routes.post(`/${this.path}`, this.store.bind(this));
    routes.put(`/${this.path}/:id`, this.update.bind(this));
    routes.delete(`/${this.path}/:id`, this.destroy.bind(this));

    return routes;
  }
}

module.exports = BaseController;
