module.exports = (sequelize, DataTypes) => {
  const Webhooks = sequelize.define('webhooks', {
    type: DataTypes.STRING,
    driverId: DataTypes.STRING,
    webhookUrl: DataTypes.STRING,
  }, {
    tableName: 'webhooks',
  });

  return Webhooks;
};
