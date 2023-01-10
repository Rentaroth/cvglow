const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['Experience'],
  summary: 'Generates job experience information in database',
  description: 'Create job experience information',
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
    description: 'Body schema for Experience information creation',
    content: {
      'data: application/json': {
        schema: {
          $ref: '#/components/schemas/requestExperienceSchema',
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