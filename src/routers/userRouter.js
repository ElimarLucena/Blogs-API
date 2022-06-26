const express = require('express');

const controllers = require('../controllers/userController');

const { userCreationValidation } = require('../middleware/userMiddleware');

const { authenticateToken } = require('../middleware/tokenMiddleware');

const router = express.Router();

router.use(express.json());

router.post('/', userCreationValidation, controllers.createUser);

router.get('/', authenticateToken, controllers.getAllUsers);

router.get('/:id', authenticateToken, controllers.getUserById);

router.delete('/:me', authenticateToken, controllers.deleteUser);

module.exports = router;