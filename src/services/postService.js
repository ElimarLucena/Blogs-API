const { Category, BlogPost, PostCategory, User } = require('../database/models');

const createBlogPost = async (payload, userId) => {
  const { title, content, categoryIds } = payload;

  const post = categoryIds.map(async (id) => Category.findByPk(id));

  const result = await Promise.all(post);

  if (result.some((item) => item === null)) return false;

  // inserindo dados na tabela BlogPost.

  const newCategory = await BlogPost.create({ title, content, userId });

  // inserido dados na tabela PostCategories.

  const createPostCategories = categoryIds.map(async (item) => (
    PostCategory.create({ postId: newCategory.dataValues.id, categoryId: item })
  ));

  await Promise.all(createPostCategories);

  return newCategory.dataValues;
};

const getAllBlogPosts = async () => {
  try {
    const posts = await BlogPost.findAll({
      include: [{
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category, as: 'categories', through: { attributes: [] },
      }],
    });

    return posts;
  } catch (error) {
    return error;
  }
};

const getBlogPostsById = async (id) => {
  const verifyIdExixt = await BlogPost.findByPk(id);

  if (!verifyIdExixt) return false;

  try {
    const posts = await BlogPost.findOne({
      where: { id },
      include: [{
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category, as: 'categories', through: { attributes: [] },
      }],
    });

    return posts;
  } catch (error) {
    return error;
  }
};

const updatePost = async (id, payload) => {
  const { title, content } = payload;

  try {
    const [post] = await BlogPost.update({ title, content }, { where: { userId: id } });

    if (!post) return false;

    const updatedPost = await BlogPost.findOne({
      where: { userId: id },
      include: [{
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      {
        model: Category, as: 'categories', through: { attributes: [] },
      }],
    });

    return updatedPost;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostsById,
  updatePost,
  deletePost,
};