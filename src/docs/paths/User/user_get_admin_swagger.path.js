const statusCodes = require('../../schemas/codes');

const getUsers = {
  tags: ['User'],
  summary: 'Obtains account information of all users, only Admin can access',
  description: 'Obtain user information by suppliying Admin permissions.',
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
    404: statusCodes.statusCode404,
  },
};

module.exports = { getUsers };
