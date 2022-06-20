const express = require('express');

const controllers = require('../controllers/userController');

const { userCreationValidation } = require('../middleware/userMiddleware');

const router = express.Router();

router.use(express.json());

router.post('/', userCreationValidation, controllers.createUser);

module.exports = router;