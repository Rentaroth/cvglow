const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { schema } = require('./swagger_doc');

const options = {
  definition: schema,
  apis: ['./schemas/**/*.schema.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Documentation of this API avaiable at http://localhost:${port}/docs`);
}

module.exports = { swaggerDocs };