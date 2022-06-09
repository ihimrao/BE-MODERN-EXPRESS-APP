const { root, assignToken } = require('../controller/authController');

module.exports = (function () {
  'use strict';

  var authRoutes = require('express').Router();

  authRoutes.get('/', root);

  return authRoutes;
})();
