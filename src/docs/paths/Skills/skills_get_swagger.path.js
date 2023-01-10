const statusCodes = require('../../schemas/codes');

const get = {
  tags: ['Skills'],
  summary: 'Obtains skills information of user in database',
  description: 'Obtain skills information by suppliying an id.',
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
    200: statusCodes.statusCode200({ flat: '#/components/schemas/responseSkillsSchema'}),
    401: statusCodes.statusCode401,
    404: statusCodes.statusCode404,
  },
};

module.exports = { get };