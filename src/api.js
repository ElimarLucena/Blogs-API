const express = require('express');

// ...

const app = express();

app.use(express.json());

app.use((err, _req, res, _next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
