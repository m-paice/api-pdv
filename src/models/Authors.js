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
    Authors.hasMany(models.posts, { foreignKey: 'authorId', as: 'posts' });
  };

  return Authors;
};
