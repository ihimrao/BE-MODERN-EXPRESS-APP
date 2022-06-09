module.exports = (function () {
  'use strict';
  var authRoutes = require('express').Router();

  authRoutes.get('/', function (req, res) {
    res.send('Hello AuthRoutes!');
  });

  return authRoutes;
})();
