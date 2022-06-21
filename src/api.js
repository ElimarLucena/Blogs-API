const express = require('express');

const app = express();

app.use(express.json());

const loginRouter = require('./routers/loginRouter');

const userRouter = require('./routers/userRouter');

const categoriesRouter = require('./routers/categoriesRouter');

const postRouter = require('./routers/postRouter');

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoriesRouter);

app.use('/post', postRouter);

app.use((err, _req, res, _next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

module.exports = app;
