const express = require('express');

const controllers = require('../controllers/categoriesController');

const { authenticateToken } = require('../middleware/tokenMiddleware');

const router = express.Router();

router.use(express.json());

router.post('/', authenticateToken, controllers.createCategory);

router.get('/', authenticateToken, controllers.getAllCategories);

module.exports = router;