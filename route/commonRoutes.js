module.exports = (function () {
  'use strict';
  var commonRoutes = require('express').Router();

  commonRoutes.get('/', function (req, res) {
    res.send('Hello CommonRoutes!');
  });

  return commonRoutes;
})();
