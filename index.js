const express = require('express')
const app = express()

app.use((req, res, next) => {
    console.log('Time: ', Date.now());
    next();
  });

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})


app.listen(3000, () => console.log('Run in port 3000.'));