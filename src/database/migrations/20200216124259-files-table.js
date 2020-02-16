
require('dotenv').config();

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('files', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    authorId: {
      type: Sequelize.UUID,
      references: {
        model: 'authors',
        key: 'id',
      },
    },
    postId: {
      type: Sequelize.UUID,
      references: {
        model: 'posts',
        key: 'id',
      },
    },
    type: {
      type: Sequelize.ENUM,
      values: ['avatar', 'attachment'],
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    originalName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    mimeType: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    extension: {
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

  down: (queryInterface, Sequelize) => queryInterface.dropTable('files'),
};
