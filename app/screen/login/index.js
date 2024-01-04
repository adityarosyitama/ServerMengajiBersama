const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    const htmlView = `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Homepage</title>
    </head>
    <body>
    <div>
    <h1>Login</h1>
    </div>
    </body>
    </html>
    `;
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlView);
});


module.exports = router;