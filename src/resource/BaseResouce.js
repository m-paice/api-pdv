class BaseResouce {
  constructor(repository) {
    this.repository = repository;
  }

  getRepository() {
    return this.repository;
  }

  findMany(options) {
    return this.getRepository().findMany(options);
  }

  findOne(options) {
    return this.getRepository().findOne(options);
  }

  findById(id, options) {
    return this.getRepository().findById(id, options);
  }

  create(data, options) {
    return this.getRepository().create(data, options);
  }

  updateById(id, data, options) {
    return this.getRepository().updateById(id, data, options);
  }

  destroyById(id) {
    return this.getRepository().destroyById(id);
  }
}

module.exports = BaseResouce;
