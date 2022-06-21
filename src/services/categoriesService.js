const { Category } = require('../database/models');

const createCategory = async (payload) => {
  const categoryAlreadyRegistered = await Category.findOne({
    where: { name: payload.name },
  });

  if (categoryAlreadyRegistered) return false;

  try {
    const newCategory = await Category.create(payload);

    const { id, name } = newCategory.dataValues;

    return { id, name };
  } catch (error) {
    return error;
  }
};

module.exports = {
  createCategory,
};