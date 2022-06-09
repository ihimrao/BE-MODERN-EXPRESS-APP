const { root, login } = require('../controller/userController');
module.exports = (function () {
  'use strict';
  var userRoutes = require('express').Router();

  userRoutes.get('/', root);

  return userRoutes;
})();
