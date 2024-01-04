const express = require('express');
const serverless = require('serverless-http');
const mysql = require('serverless-mysql');

const app = express();
app.use(express.json());

const db = mysql({
  config: {
    host: 'your-mysql-host',
    database: 'your-database-name',
    user: 'your-username',
    password: 'your-password',
  },
});

// Create (Add) data
app.post('/add', async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await db.query('INSERT INTO your_table (name, email) VALUES (?, ?)', [name, email]);
    res.json({ message: 'Data added successfully', data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Read data
app.get('/get/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const results = await db.query('SELECT * FROM your_table WHERE id = ?', [id]);
    res.json({ data: results });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update data
app.put('/update/:id', async (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  try {
    const result = await db.query('UPDATE your_table SET name = ?, email = ? WHERE id = ?', [name, email, id]);
    res.json({ message: 'Data updated successfully', data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete data
app.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM your_table WHERE id = ?', [id]);
    res.json({ message: 'Data deleted successfully', data: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Close the database connection after each request
app.use((req, res, next) => {
  db.end();
  next();
});

// Set up the server using serverless-http
module.exports.handler = serverless(app);
