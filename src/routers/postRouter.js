const express = require('express');

const controller = require('../controllers/postController');

const { authenticateToken } = require('../middleware/tokenMiddleware');

const { postCreationValidation } = require('../middleware/postMiddleware');

const router = express.Router();

router.use(express.json());

router.post('/', 
  authenticateToken, 
  postCreationValidation, 
  controller.createBlogPost);

router.get('/', authenticateToken, controller.getAllBlogPosts);

router.get('/', authenticateToken, controller.getBlogPostsById);

module.exports = router;