module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define('categories', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'categories',
  });

  Categories.associate = (models) => {
    Categories.hasMany(models.posts, { foreignKey: 'categoryId', as: 'posts' });
  };

  return Categories;
};
