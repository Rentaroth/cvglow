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
  ],
  tags,
  paths: {
    '/user': paths.userPath,
    '/personalinfo': paths.personalInfoPath,
    '/languages': paths.languagesPath,
    '/references': paths.referencesPath,
    '/skills': paths.skillsPath,
    '/experience': paths.experiencePath,
    '/techSkills': paths.techSkillsPath,
    '/utilities': paths.utilitiesPath,
    '/aditionals': paths.aditionalsPath,
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
