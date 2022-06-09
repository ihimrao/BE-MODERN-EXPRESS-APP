// run `node index.js` in the terminal
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
var commonRoutes = require('./route/commonRoutes');
var authRoutes = require('./route/authRoutes');
var adminRoutes = require('./route/adminRoutes');
var userRoutes = require('./route/userRoutes');

// Body Parser
app.use(bodyParser.json());

// Routes
app.use('/common', commonRoutes);
app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
  console.log('Express IMsarkar Running ', PORT);
});
