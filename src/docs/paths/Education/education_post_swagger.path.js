const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['Education'],
  summary: 'Generates formation information in database',
  description: 'Create formation information',
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
    description: 'Body schema for formation information creation',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/requestEducationSchema',
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