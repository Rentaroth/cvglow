const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['User'],
  summary: 'Generates information of user in database',
  description: 'Generates an account providing data in body',
  security: [
    {
      BearerAuth: {
        schema: {
          $ref: '#/components/securitySchemes/BearerAuth',
        },
      },
    },
  ],
  parameters: [],
  requestBody: {
    description: 'Body schema for User creation',
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/requestUserSchema',
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
