const express = require('express');

const controllers = require('../controllers/userController');

const { userCreationValidation } = require('../middleware/userMiddleware');

const { authenticateToken } = require('../middleware/tokenMiddleware');

const router = express.Router();

router.use(express.json());

router.post('/', userCreationValidation, controllers.createUser);

router.get('/', authenticateToken, controllers.getAllUsers);

module.exports = router;