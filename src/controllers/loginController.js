const services = require('../services/loginService');

const authenticate = async (req, res) => {
  const token = await services.authenticate(req.body);

  if (token) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  return res.status(200).json(token);
};

module.exports = {
  authenticate,
};