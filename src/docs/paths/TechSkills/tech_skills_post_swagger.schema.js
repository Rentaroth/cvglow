const statusCodes = require('../../schemas/codes');

const post = {
  tags: ['TechSkills'],
  summary: 'Generates tech skills information of user in database',
  description: 'Create tech skills information',
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
    description: 'Body schema for tech skills creation',
    content: {
      'data: application/json': {
        schema: {
          $ref: '#/components/schemas/requestTechSkillsSchema',
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