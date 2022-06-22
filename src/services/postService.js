const { Category, BlogPost, PostCategory } = require('../database/models');

const createBlogPost = async (payload, userId) => {
  const { title, content, categoryIds } = payload;

  const post = categoryIds.map(async (id) => Category.findByPk(id));

  const result = await Promise.all(post);

  if (result.some((item) => item === null)) return false;

  // inserindo dados na tabela BlogPost.

  const { count } = await BlogPost.findAndCountAll(); // Source: https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall

  const objCreatePost = {
    id: count + 1, title, content, userId, published: new Date(), updated: new Date() };

  const newCategory = await BlogPost.create(objCreatePost);

  // inserido dados na tabela PostCategories.

  const createPostCategories = categoryIds.map(async (item) => (
    PostCategory.create({ postId: newCategory.dataValues.id, categoryId: item })
  ));

  await Promise.all(createPostCategories);

  return newCategory.dataValues;
};

module.exports = {
  createBlogPost,
};