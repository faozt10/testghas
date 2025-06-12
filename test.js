// vulnerable.js

const express = require('express');
const app = express();

app.use(express.json());

// Vulnerability 1: Using eval() on untrusted usedsr input (RCE / XSS risk)
app.post('/calculate', (req, res) => {
  const userExpression = req.body.expression;

  try {
    // Insecure: directly evaluating user input
    const result = eval(userExpression);
    res.send(`Result: ${result}`);
  } catch (error) {
    res.status(400).send('Invalid expression');
  }
});

// Vulnerability 2: Prototype pollution via merging user input into object without checks
app.post('/config', (req, res) => {
  const defaultConfig = { safe: true };

  // Unsafe merge that allows prototype pollution
  const userConfig = req.body;
  Object.assign(defaultConfig, userConfig);

  res.json(defaultConfig);
});

app.listen(3000, () => {
  console.log('Vulnerable app listening on port 3000');
});
