const { root, login } = require('../controller/adminController');
module.exports = (function () {
  'use strict';
  var adminRoutes = require('express').Router();

  adminRoutes.get('/', root);

  return adminRoutes;
})();
