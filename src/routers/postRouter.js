const express = require('express');

const controller = require('../controllers/postController');

const { authenticateToken } = require('../middleware/tokenMiddleware');

const { postCreationValidation, postUpdateValidation } = require('../middleware/postMiddleware');

const router = express.Router();

router.use(express.json());

router.get('/search', authenticateToken, controller.searchPosts);

router.post('/', 
  authenticateToken, 
  postCreationValidation, 
  controller.createBlogPost);

router.get('/', authenticateToken, controller.getAllBlogPosts);

router.get('/:id', authenticateToken, controller.getBlogPostsById);

router.put('/:id', 
  authenticateToken, 
  postUpdateValidation, 
  controller.updatePost);

router.delete('/:id', authenticateToken, controller.deletePost);

module.exports = router;