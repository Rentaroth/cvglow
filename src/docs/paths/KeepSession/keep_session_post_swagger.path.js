const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['User'],
  summary: 'Creates a session for user log in automatically',
  description: 'Allows user to generates a new session using an old token',
  security: [
    {
      BearerAuth: {
        schema: {
          $ref: '#/components/securitySchemes/BearerAuth',
        },
      },
    },
  ],
  responses: {
    200: statusCodes.statusCode200(),
    401: statusCodes.statusCode401,
  },
};

module.exports = { post };