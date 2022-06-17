const express = require('express');

const controllers = require('../controllers/loginController');

const { loginValidation } = require('../middleware/loginMiddleware');

const router = express.Router();

router.use(express.json());

router.post('/', loginValidation, controllers.authenticate);

module.exports = router;