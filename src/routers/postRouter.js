const express = require('express');

const controller = require('../controllers/postController');

const { authenticateToken } = require('../middleware/tokenMiddleware');

const router = express.Router();

router.use(express.json());

router.post('/', authenticateToken, controller.createBlogPost);

module.exports = router;