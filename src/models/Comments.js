module.exports = (sequelize, DataTypes) => {
  const Comments = sequelize.define('comments', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    text: DataTypes.STRING,
  }, {
    tableName: 'comments',
  });

  Comments.associate = (models) => {
    Comments.belongsTo(models.authors, { foreignKey: 'authorId', as: 'author' });
    Comments.belongsTo(models.posts, { foreignKey: 'postId', as: 'post' });
  };

  return Comments;
};
