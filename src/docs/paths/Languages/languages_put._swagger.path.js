const statusCodes = require('../../schemas/codes');

const put = {
  tags: ['Languages'],
  summary: 'Edits languages information of user in database',
  description: 'Create languages information by suppliying an id.',
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
  requestBody: {
    description: 'Body schema for Languages modification',
    content: {
      'data: application/json': {
        schema: {
          $ref: '#/components/schemas/requestLanguagesSchema',
        },
      },
    },
  },
  responses: {
    200: statusCodes.statusCode200(),
    401: statusCodes.statusCode401,
  },
};

module.exports = { put };