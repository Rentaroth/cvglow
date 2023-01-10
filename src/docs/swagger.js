const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { schema } = require('./swagger_doc');

const doc = {
  definition: schema,
  apis: ['/**/*.js'], // files containing annotations as above
};

const options = {
  customCss:
    ".swagger-ui .topbar { background-color: #fab2ea} .topbar-wrapper img {content:url('../assets/logo.gif'); width:auto; height:30px;}",
  customSiteTitle: 'API Docs',
  customfavIcon: '/assets/favicon.ico',
};

const swaggerSpec = swaggerJSDoc(doc);

const swaggerDocs = (app, port) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, options));
  console.log(`Documentation of this API avaiable at http://localhost:${port}/docs`);
}

module.exports = { swaggerDocs };