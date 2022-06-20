const { User } = require('../database/models');

const createUser = async (payload) => {
  const userAlreadyRegistered = await User.findOne({ 
    where: { email: payload.email },
  });

  if (userAlreadyRegistered) return false;
};

module.exports = {
  createUser,
};