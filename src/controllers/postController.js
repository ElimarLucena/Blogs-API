const services = require('../services/postService');

const InternalServerError = { message: 'Internal server error' };

const createBlogPost = async (req, res) => {
  const { id } = req.user.data;

  try {
    const post = await services.createBlogPost(req.body, id);

    if (!post) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    return res.status(201).json(post);
  } catch (e) {
    return res.status(500).json(InternalServerError);
  }
};

const getAllBlogPosts = async (_req, res) => {
  try {
    const posts = await services.getAllBlogPosts();

    return res.status(200).json(posts);
  } catch (e) {
    return res.status(500).json(InternalServerError);
  }
};

const getBlogPostsById = async (req, res) => {
  const { id } = req.params;

  try {
    const posts = await services.getBlogPostsById(id);

    if (!posts) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(200).json(posts);
  } catch (e) {
    return res.status(500).json(InternalServerError);
  }
};

const updatePost = async (req, res) => {
  const { id } = req.user.data;

  try {
    const posts = await services.updatePost(id, req.body);

    if (!posts) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    return res.status(200).json(posts);
  } catch (e) {
    return res.status(500).json(InternalServerError);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  const { id: userId } = req.user.data;

  try {
    const post = await services.deletePost(id, userId);

    if (!post) {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    if (post === 'Unauthorized user') {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    return res.status(204).json();
  } catch (e) {
    return res.status(500).json(InternalServerError);
  }
};

const searchPosts = async (req, res) => {
  const { q } = req.query;

  try {
    const posts = await services.searchPosts(q);

    return res.status(200).json(posts);
  } catch (e) {
    return res.status(500).json(InternalServerError);
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostsById,
  updatePost,
  deletePost,
  searchPosts,
};