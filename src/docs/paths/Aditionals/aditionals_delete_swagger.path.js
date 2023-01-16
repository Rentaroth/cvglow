const statusCodes = require('../../schemas/codes');

const erase = {
  tags: ['Aditionals'],
  summary: 'Deletes aditional tools information of user in database',
  description: 'Deletes aditional tools information by suppliying an id.',
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
    200: statusCodes.statusCode200(),
    401: statusCodes.statusCode401,
  },
};

module.exports = { erase };