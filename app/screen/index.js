const app = require('express')();
const express = require('express')
const PORT = 3000;
const { v4: uuidv4 } = require('uuid');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('../utils/middlewares/middlewares');

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
// app.use(middlewares.notFound);
// app.use(middlewares.errorHandler);
app.use(express.json());
app.use(express.static('public'));
app.listen(PORT, () => console.log(`Run in port http://localhost:${PORT}/`));

app.get("/", (req, res) => {
  const path = `/api/item/${uuidv4()}`
  const htmlView = `
  <!DOCTYPE html>
  <html>
  <head>
  <title>Homepage</title>
  <link href="/styles.css" rel="stylesheet">
  </head>
  <body>
  <div class="center"> <!-- Menggunakan kelas 'center' yang telah dibuat -->
  <h1 class="text-4xl">Homepage server MengajiBersama.apk</h1>
  <a href="/login" class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</a>
  </div>
  </body>
  </html>
  `;
  res.setHeader('Content-Type', 'text/html');
  res.end(htmlView);
});


app.use('/login', require('./login/index'))

module.exports = app;