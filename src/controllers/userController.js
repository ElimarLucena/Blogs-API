const services = require('../services/userService');

const internalServerError = { message: 'Internal server error' };

const createUser = async (req, res) => {
  const user = await services.createUser(req.body);

  if (!user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = user;

  return res.status(201).json(token);
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await services.getAllUsers();

    return res.status(200).json(users);
  } catch (e) {
    return res.status(500).json(internalServerError);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await services.getUserById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).json(internalServerError);
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};