const { root, globalState } = require('../controller/commonController');
module.exports = (function () {
  'use strict';
  var commonRoutes = require('express').Router();

  commonRoutes.get('/', root);

  return commonRoutes;
})();
