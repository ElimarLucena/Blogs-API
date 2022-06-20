const express = require('express');

const controllers = require('../controllers/userController');

const router = express.Router();

router.use(express.json());

router.post('/', controllers.createUser);

module.exports = router;