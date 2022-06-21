const services = require('../services/userService');

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
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createUser,
  getAllUsers,
};