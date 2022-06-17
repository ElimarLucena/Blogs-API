const { User } = require('../database/models');

const authenticate = async (payload) => {
  const { email, password } = payload;

  const user = await User.findOne({ 
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { email, password },
  });

  if (!user) return false;
};

module.exports = {
  authenticate,
};