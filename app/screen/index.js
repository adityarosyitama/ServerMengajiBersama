const app = require('express')();
const { v4 } = require('uuid');

app.get("/", (req, res) => {
    const path = `/api/item/${v4()}`;
    const htmlView = `
    <!DOCTYPE html>
    <html>
    <head>
    <title>Homepage</title>
    </head>
    <body>
    <div>
    <h1>Homepage server MengajiBersama.apk ${path}</h1>
    </div>
    </body>
    </html>
    `;
    console.log('Time: ', Date.now());
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlView);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

module.exports = app;