const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['User'],
  summary: 'Generates information of Admin account in database',
  description: 'Generates an admin account providing data in body',
  parameters: [],
  requestBody: {
    description: 'Body schema for Admmin account creation',
    content: {
      'data: application/json': {
        schema: {
          $ref: '#/components/schemas/requestAdminSchema',
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