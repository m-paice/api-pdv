module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.FLOAT,
    amount: DataTypes.INTEGER,
  }, {
    tableName: 'products',
  });

  // Products.associate = (models) => {};

  return Products;
};
