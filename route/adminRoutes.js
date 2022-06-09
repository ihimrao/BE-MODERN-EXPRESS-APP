module.exports = (function () {
  'use strict';
  var adminRoutes = require('express').Router();

  adminRoutes.get('/', function (req, res) {
    res.send('Hello AdminRoutes!');
  });

  return adminRoutes;
})();
