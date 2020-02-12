module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('webhooks', {
    id: {
      type: Sequelize.UUID,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    driverId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    webhookUrl: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('webhooks'),
};
