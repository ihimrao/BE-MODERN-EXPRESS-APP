// run `node index.js` in the terminal
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;

app.get('/hello', (req, res) => {
  res.end('hellow');
});

app.listen(PORT, () => {
  console.log('app is listening on port', PORT);
});
