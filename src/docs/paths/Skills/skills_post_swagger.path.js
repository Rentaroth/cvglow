const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['Skills'],
  summary: 'Generates skills information of user in database',
  description: 'Create skills information',
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
    description: 'Body schema for Skills creation',
    content: {
      'data: application/json': {
        schema: {
          $ref: '#/components/schemas/requestSkillsSchema',
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