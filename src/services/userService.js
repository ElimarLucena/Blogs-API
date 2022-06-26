const { User } = require('../database/models');
const generateJWTToken = require('../utils/jwt.js');

const createUser = async (payload) => {
  const userAlreadyRegistered = await User.findOne({ 
    where: { email: payload.email },
  });

  if (userAlreadyRegistered) return false;

  const newUser = await User.create(payload);

  const {
    id,
    displayName,
    email,
    image,
  } = newUser.dataValues;

  const token = generateJWTToken({ id, displayName, email, image });

  return { token };
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll({ 
      attributes: ['id', 'displayName', 'email', 'image'],
    });

    return users;
  } catch (error) {
    return error;
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findOne({ 
      where: { id },
      attributes: ['id', 'displayName', 'email', 'image'],
    });

    if (!user) return false;

    return user;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (id) => {
  try {
    await User.destroy({ 
      where: { id },
    });
  } catch (error) {
    return error;
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};