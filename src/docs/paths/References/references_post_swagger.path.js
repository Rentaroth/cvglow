const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['References'],
  summary: 'Generates reference contacts of user in database',
  description: 'Create reference contacts information',
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
    description: 'Body schema for User creation',
    content: {
      'data: application/json': {
        schema: {
          $ref: '#/components/schemas/requestReferencesSchema',
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