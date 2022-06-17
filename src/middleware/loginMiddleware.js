const loginValidation = (req, _res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    next({
      statusCode: 400,
      message: 'Some required fields are missing',
    });
  }

  next();
};

module.exports = {
  loginValidation,
};