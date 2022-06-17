const { User } = require('../database/models');
const generateJWTToken = require('../utils/jwt.js');

const authenticate = async (payload) => {
  const { email, password } = payload;

  const user = await User.findOne({ 
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email, password },
  });

  if (!user) return false;

  const token = generateJWTToken(user.dataValues);

  return { token };
};

module.exports = {
  authenticate,
};