const services = require('../services/userService');

const createUser = async (req, res) => {
  const user = await services.createUser(req.body);

  if (!user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const token = user;

  return res.status(201).json(token);
};

module.exports = {
  createUser,
};