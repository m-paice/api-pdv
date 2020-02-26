module.exports = (sequelize, DataTypes) => {
  const Authors = sequelize.define('authors', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    tableName: 'authors',
    defaultScope: {
      attributes: { exclude: ['password'] },
    },
  });

  Authors.associate = (models) => {
    Authors.hasMany(models.posts, { foreignKey: 'authorId', as: 'post' });
    Authors.hasMany(models.comments, { foreignKey: 'authorId', as: 'comment' });
    Authors.hasOne(models.files, { foreignKey: 'authorId', as: 'file' });
  };

  return Authors;
};
