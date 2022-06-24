const postCreationValidation = (req, _res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    next({
      statusCode: 400,
      message: 'Some required fields are missing',
    });
  }

  next();
};

const postUpdateValidation = (req, _res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    next({
      statusCode: 400,
      message: 'Some required fields are missing',
    });
  }

  next();
};

module.exports = {
  postCreationValidation,
  postUpdateValidation,
};