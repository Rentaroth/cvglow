const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['Aditionals'],
  summary: 'Generates aditional tools information in database',
  description: 'Create aditional tools information',
  security: [
    {
      BearerAuth: {
        schema: {
          $ref: '#/components/securitySchemes/BearerAuth',
        },
      },
    },
  ],
  requestBody: {
    description: 'Body schema for aditional tools creation',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/requestAditionalsSchema',
        },
      },
    },
  },
  responses: {
    200: statusCodes.statusCode200(),
    401: statusCodes.statusCode401,
  },
};

module.exports = { post };