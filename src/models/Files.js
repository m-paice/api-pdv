module.exports = (sequelize, DataTypes) => {
  const Files = sequelize.define('files', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    originalName: DataTypes.STRING,
    mimeType: DataTypes.STRING,
    extension: DataTypes.STRING,
    filename: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${this.get('name')}`;
      },
    },
    url: {
      type: DataTypes.VIRTUAL,
      get() {
        return `${process.env.PUBLIC_URL}/files/${this.get('filename')}`;
      },
    },
  }, {
    tableName: 'files',
  });

  Files.associate = (models) => {
    Files.belongsTo(models.authors, { foreignKey: 'authorId', as: 'author' });
    Files.belongsTo(models.posts, { foreignKey: 'postId', as: 'post' });
  };

  return Files;
};
