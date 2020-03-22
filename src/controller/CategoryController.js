const BaseController = require('./BaseController');

const categoryResource = require('../resource/CategoryResource');

class CategoryController extends BaseController {
  constructor() {
    super(categoryResource, 'categories');
  }

  routes() {
    const routes = super.routes();

    return routes;
  }
}

module.exports = new CategoryController();
