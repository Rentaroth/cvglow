const { tags } = require('./tags');
const schemas = require('./schemas');
const paths = require('./paths');

const schema = {
  openapi: '3.0.3',
  info: {
    title: 'CV Online',
    description:
      'An API wich allows to manage data oriented to generate a CV automatically, taking users information stored to feed a frontend to organize it.',
    version: '1.0.0',
    contact: {
      name: 'Antonio Tabares',
      email: 'antonio.tabares@outlook.es',
      url: 'https://github.com/Rentaroth',
    },
  },
  servers: [
    {
      url: 'https://cvglow.onrender.com/',
    },
    {
      url: 'http://localhost:3010/',
    },
  ],
  tags,
  paths: {
    '/user/{id}': paths.userPathId,
    '/user' :paths.userPath,
    '/personalinfo/{id}': paths.personalInfoPathId,
    '/personalinfo': paths.personalInfoPath,
    '/languages/{id}': paths.languagesPathId,
    '/languages': paths.languagesPath,
    '/references/{id}': paths.referencesPathId,
    '/references': paths.referencesPath,
    '/skills/{id}': paths.skillsPathId,
    '/skills': paths.skillsPath,
    '/experience/{id}': paths.experiencePathId,
    '/experience': paths.experiencePath,
    '/techSkills/{id}': paths.techSkillsPathId,
    '/techSkills': paths.techSkillsPath,
    '/utilities/{id}': paths.utilitiesPathId,
    '/utilities': paths.utilitiesPath,
    '/aditionals/{id}': paths.aditionalsPathId,
    '/aditionals': paths.aditionalsPath,
    '/education/{id}': paths.educationPathId,
    '/education': paths.educationPath,
    '/user/admin': paths.adminPath,
    '/user/login': paths.loginPath,
  },
  components: {
    schemas: {
      ...schemas,
    },
    securitySchemes: {
      BearerAuth: schemas.BearerAuth,
    },
  },
};

module.exports = { schema };
