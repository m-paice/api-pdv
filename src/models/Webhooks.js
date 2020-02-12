module.exports = (sequelize, DataTypes) => {
  const Webhooks = sequelize.define('webhooks', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    type: DataTypes.STRING,
    driverId: DataTypes.STRING,
    webhookUrl: DataTypes.STRING,
  }, {
    tableName: 'webhooks',
  });

  return Webhooks;
};
