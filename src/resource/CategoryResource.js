const BaseResource = require('./BaseResouce');
const CategoryRespository = require('../repository/CategoryRespository');

class CategoryResource extends BaseResource {
  constructor() {
    super(CategoryRespository);
  }
}

module.exports = new CategoryResource();
