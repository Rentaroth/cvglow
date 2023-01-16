const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['PersonalInfo'],
  summary: 'Generates personal information of user in database',
  description: 'Create personal information',
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
          $ref: '#/components/schemas/requestPersonalInfoSchema',
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