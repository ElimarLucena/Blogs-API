const services = require('../services/categoriesService');

const createCategory = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  try {
    const category = await services.createCategory(req.body);
  
    if (!category) {
      return res.status(409).json({ message: 'category already registered' });
    }
  
    return res.status(201).json(category);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCategory,
};