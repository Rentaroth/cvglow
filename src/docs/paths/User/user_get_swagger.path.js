const statusCodes = require('../../schemas/codes');

const get = {
  tags: ['User'],
  summary: 'Obtains account information of user',
  description: 'Obtain user information by suppliying id.',
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
    {
      name: 'extended',
      in: 'query',
      description:
        'Assignment of the variable called extended to unlock joins for the user data requested',
      required: false,
      schema: {
        type: 'boolean',
        example: 'true',
      },
    },
  ],
  responses: {
    200: statusCodes.statusCode200({
      flat: '#/components/schemas/responseUserSchema',
      join: '#/components/schemas/jointUser'
    }),
    401: {
      description: 'Unauthorized for this action',
    },
  },
};

module.exports = { get };
