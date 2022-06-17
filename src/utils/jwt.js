require('dotenv').config();

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateJWTToken = (payload) => jwt.sign({ data: payload }, secret, jwtConfig);

module.exports = generateJWTToken;