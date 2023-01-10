const statusCodes = require('../../schemas/codes');

const get = {
  tags: ['TechSkills'],
  summary: 'Obtains tech skills information of user in database',
  description: 'Obtain tech skills information by suppliying an id.',
  security: [
    {
      BearerAuth: {
        schema: {
          $ref: '#/components/securitySchemes/BearerAuth',
        },
      },
    },
  ],
  parameters: [
    {
      name: 'id',
      in: 'path',
      description: 'Required id for realizing where to manage data',
      required: false,
      schema: {
        type: 'integer',
        example: 47382654,
      },
    },
  ],
  responses: {
    200: statusCodes.statusCode200({ flat: '#/components/schemas/responseTechSkillsSchema'}),
    401: statusCodes.statusCode401,
    404: statusCodes.statusCode404,
  },
};

module.exports = { get };