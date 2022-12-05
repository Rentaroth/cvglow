const router = require('express').Router();
const routes = require('./src/api');

module.exports = () => {
  router.use('/', routes.files);
  router.use('/personalInfo', routes.personalInfo);

  return router;
};
