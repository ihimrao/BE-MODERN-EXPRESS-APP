module.exports = (function () {
  'use strict';
  var userRoutes = require('express').Router();

  userRoutes.get('/', function (req, res) {
    res.send('Hello UserRoutes!');
  });

  return userRoutes;
})();
