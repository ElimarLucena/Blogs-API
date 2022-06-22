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

module.exports = router;