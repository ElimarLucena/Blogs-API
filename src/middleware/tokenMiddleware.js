const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.JWT_SECRET;

const verifyToken = (token, next) => {
  try {
    const decoded = jwt.verify(token, secret);

    return decoded;
  } catch (e) {
    next({
      statusCode: 401,
      message: 'Expired or invalid token',
    });
  }
};

const authenticateToken = (req, _res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    next({
      statusCode: 401,
      message: 'Token not found',
    });
  }

  const user = verifyToken(token, next);

  req.user = user;

  next();
};

module.exports = {
  authenticateToken,
};