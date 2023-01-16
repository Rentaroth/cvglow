const statusCodes = require('../../schemas/codes');

const put = {
  tags: ['PersonalInfo'],
  summary: 'Edits personal information of user in database',
  description: 'Modify personal information by suppliying an id.',
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
    description: 'Body schema for User creation',
    content: {
      'application/json': {
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

module.exports = { put };