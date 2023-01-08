const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['Languages'],
  summary: 'Generates languages information in database',
  description: 'Create languages information',
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
    description: 'Body schema for Languages creation',
    content: {
      'data: application/json': {
        schema: {
          $ref: '#/components/schemas/requestLanguagesSchema',
        },
      },
    },
  },
  responses: {
    200: statusCodes.statusCode200({ flat: '#/components/schemas/requestLanguagesSchema'}),
    401: statusCodes.statusCode401,
  },
};

module.exports = { post };