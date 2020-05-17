const { sequelize } = require('../models');

const { users } = sequelize.models;

exports.create = async (req, res) => {
  const response = await users.create(req.body);

  return res.json(response);
};


exports.findMany = async (req, res) => {
  const response = await users.findAll();

  return res.json(response);
};


exports.destroy = async (req, res) => {
  const { id } = req.params;

  await users.destroy({
    where: {
      id,
    },
  });

  return res.sendStatus(200);
};
