const services = require('../services/postService');

const createBlogPost = async (req, res) => {
  const { id } = req.user.data;

  try {
    const post = await services.createBlogPost(req.body, id);

    if (!post) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    return res.status(201).json(post);
  } catch (e) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllBlogPosts = async (_req, res) => {
  try {
    const posts = await services.getAllBlogPosts();

    return res.status(200).json(posts);
  } catch (e) {
    return res.status(500).json({ message: 'Internal server error' });
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
    return res.status(500).json({ message: 'Internal server error' });
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
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await services.deletePost(id);

    if (!post) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }

    if (post === 'Post does not exist') {
      return res.status(404).json({ message: 'Post does not exist' });
    }

    return res.status(204).json();
  } catch (e) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostsById,
  updatePost,
  deletePost,
};