const express = require('express');
const app = express();
require('dotenv').config()
console.log(process.env)

// Use environment variable PORT or default to 3000
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${port}`);
});
