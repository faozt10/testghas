const express = require('express');
const app = express();
const pg = require('pg');
const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

app.get('/search', (req, res) => {
  const userInput = req.query.q;  // User-controlled input from query parameter

  // Vulnerable SQL query: userInput is concatenated directly into query string
  const query = `SELECT * FROM products WHERE name LIKE '%${userInput}%'`;

  pool.query(query, (err, result) => {
    if (err) {
      res.status(500).send('Database error');
      return;
    }
    res.json(result.rows);
  });
});

app.listen(3000, () => console.log('App listening on port 3000'));
