const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { schema } = require('./swagger_doc');

const doc = {
  definition: schema,
  apis: ['./**/*/.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJSDoc(doc);

const swaggerDocs = (app, port) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Documentation of this API avaiable at http://localhost:${port}/docs`);
}

module.exports = { swaggerDocs };