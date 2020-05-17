const { sequelize } = require('../models');

const { products } = sequelize.models;

exports.create = async (req, res) => {
  const response = await products.create(req.body);

  return res.json(response);
};

exports.findMany = async (req, res) => {
  const response = await products.findAll();

  return res.json(response);
};

exports.destroy = async (req, res) => {
  const { id } = req.params;

  await products.destroy({
    where: {
      id,
    },
  });

  return res.sendStatus(200);
};
