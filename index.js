// run `node index.js` in the terminal
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
var commonRoutes = require('./route/commonRoutes');
var adminRoutes = require('./route/');
var userRoutes = require('./route/commonRoutes');
var authRoutes = require('./route/commonRoutes');

app.use('/commonRoutes', commonRoutes);
app.use('/commonRoutes', commonRoutes);
app.use('/commonRoutes', commonRoutes);

app.get('/hello', (req, res) => {
  res.end('hellow');
});

app.listen(PORT, () => {
  console.log('app is listening on port', PORT);
});
