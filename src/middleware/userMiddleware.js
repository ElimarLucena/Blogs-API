const joi = require('joi');

const schemas = () => {
  const schema = joi.object({
    displayName: joi.string().min(8).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    image: joi.string(),
  });

  return schema;
};

const userCreationValidation = (req, _res, next) => {
  const schema = schemas();

  const { error } = schema.validate(req.body);

  if (error) {
    next({
      statusCode: 400,
      message: error.details[0].message,
    });
  }

  next();
};

module.exports = {
  userCreationValidation,
};