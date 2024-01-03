const express = require('express')
const app = express()
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const PORT = 3000;
const middlewares = require('../utils/middlewares/middlewares');
const connectionDB = require("../utils/mongoDB/mongoose");

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
app.listen(PORT, () => console.log(`Run in port http://localhost:${PORT}/`));
require('dotenv').config();
connectionDB();

app.get("/", (req, res) => {
    const htmlView = `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Homepage</title>
    </head>
    <body>
    <div>
    <h1>Homepage server MengajiBersama.apk</h1>
    </div>
    </body>
    </html>
    `;
    console.log('Time: ', Date.now());
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlView);
});

app.use('/login', require('./login/index'))


module.exports = app