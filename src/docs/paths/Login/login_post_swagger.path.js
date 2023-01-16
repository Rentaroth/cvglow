const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['User'],
  summary: 'Creates a session for user log in',
  description: 'Allows user to generates a new session',
  requestBody: {
    description: 'Body schema for User account creation',
    content: {
      'data: application/json': {
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