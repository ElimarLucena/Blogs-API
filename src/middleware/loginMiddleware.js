const joi = require('joi');

const schemas = () => {
  const schema = joi.object().keys({
    email: joi.string().empty('').required(),
    password: joi.string().empty('').required(),
  }).messages({ 
    'any.required': 'Some required fields are missing',
  });

  return schema;
};

const loginValidation = (req, _res, next) => {
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
  loginValidation,
};