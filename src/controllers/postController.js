const services = require('../services/postService');

const createBlogPost = async (req, res) => {
  try {
    const post = await services.createBlogPost(req.body);

    if (!post) {
      return res.status(409).json({ message: '"categoryIds" not found' });
    }

    return res.status(201).json(post);
  } catch (e) {
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createBlogPost,
};