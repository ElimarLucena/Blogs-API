const displayNameValidation = (displayName, next) => {
  if (!displayName || displayName.length < 8) {
    next({
      statusCode: 400,
      message: '"displayName" length must be at least 8 characters long',
    });
  }
};

// Source: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript

const emailValidation = (email, next) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !email.match(emailRegex)) {
    next({
      statusCode: 400,
      message: '"email" must be a valid email',
    });
  }
};

const passwordValidation = (password, next) => {
  if (!password || password.length < 6) {
    next({
      statusCode: 400,
      message: '"password" length must be at least 6 characters long',
    });
  }
};

const userCreationValidation = (req, _res, next) => {
  const { displayName, email, password } = req.body;

  displayNameValidation(displayName, next);

  emailValidation(email, next);

  passwordValidation(password, next);

  next();
};

module.exports = {
  userCreationValidation,
};