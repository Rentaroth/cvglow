const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['Utilities'],
  summary: 'Generates utilities information of user in database',
  description: 'Create utilities information',
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
    description: 'Body schema for utilities creation',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/requestUtilitiesSchema',
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