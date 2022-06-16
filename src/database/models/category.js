const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define("Category", {
    name: DataTypes.STRING
  }, { timestamps: false });

  return CategoryTable;
};

module.exports = CategorySchema;