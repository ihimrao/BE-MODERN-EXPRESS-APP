const { root, assignToken } = require('../controller/authController');
const auth = require('../middleware/authMiddleware');
module.exports = (function () {
  'use strict';

  var authRoutes = require('express').Router();

  authRoutes.get('/', auth, root);

  return authRoutes;
})();
