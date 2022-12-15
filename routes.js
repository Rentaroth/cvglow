const router = require('express').Router();
const routes = require('./src/api');

module.exports = () => {
  router.use('/', routes.files);
  router.use('/personalInfo', routes.personalInfo);
  router.use('/education', routes.education);
  router.use('/utilities', routes.utilities);
  router.use('/aditionals', routes.aditionals);
  router.use('/languages', routes.languages);
  router.use('/skills', routes.skills);
  router.use('/techSkills', routes.techSkills);
  router.use('/references', routes.references);
  router.use('/experience', routes.experience);

  return router;
};
