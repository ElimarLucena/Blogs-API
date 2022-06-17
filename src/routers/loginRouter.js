const express = require('express');

const controllers = require('../controllers/loginController');

const router = express.Router();

router.use(express.json());

router.post('/', controllers.authenticate);

module.exports = router;