// run `node index.js` in the terminal
const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
var commonRoutes = require('./route/commonRoutes');
var authRoutes = require('./route/authRoutes');
var adminRoutes = require('./route/adminRoutes');
var userRoutes = require('./route/userRoutes');

app.use('/common', commonRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log('app is listening on port', PORT);
});
