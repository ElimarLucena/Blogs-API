const services = require('../services/categoriesService');

const createCategory = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: 'name is required' });
  }

  const category = await services.createCategory(req.body);

  if (!category) {
    return res.status(409).json({ message: 'category already registered' });
  }

  return res.status(201).json(category);
};

module.exports = {
  createCategory,
};