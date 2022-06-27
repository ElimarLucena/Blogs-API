const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPostTable = sequelize.define("BlogPost", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published:{
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
    updated: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    }
  }, { timestamps: false });

  BlogPostTable.associate = (models) => {
    BlogPostTable.belongsTo(models.User, {
      foreignKey: 'id',
      as: 'user'
    });
  };

  return BlogPostTable;
};

module.exports = BlogPostSchema;