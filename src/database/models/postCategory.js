const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define("PostCategory", {
    postId: { 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    categoryId:  { 
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, { timestamps: false });

  PostCategoryTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategoryTable,
      foreignKey: 'id',
      otherKey: 'id'
    });

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategoryTable,
      foreignKey: 'id',
      otherKey: 'id'
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategorySchema;