class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  findMany(options) {
    return this.model.findAll(options);
  }

  findOne(options) {
    return this.model.findOne(options);
  }

  findById(id, options) {
    return this.model.findByPk(id, options);
  }

  create(data, options) {
    return this.model.create(data, options);
  }

  updateById(id, data, options) {
    return this.model.update({ where: { id }, options }, data);
  }

  destroyById(id) {
    return this.model.destroy({ where: { id } });
  }
}

module.exports = BaseRepository;
