const statusCodes = require('../../schemas/codes');

const get = {
  tags: ['Education'],
  summary: 'Obtains formation information of user in database',
  description: 'Obtains formation information by suppliying an id.',
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
    200: statusCodes.statusCode200({ flat: '#/components/schemas/requestEducationSchema', join: '#/components/schemas/educationJoinSchema'}),
    401: statusCodes.statusCode401,
  },
};

module.exports = { get };