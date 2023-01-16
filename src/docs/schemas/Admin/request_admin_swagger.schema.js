const requestAdminSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        userName: {
          type: 'string',
          example: 'Elma-carron',
        },
        eMail: {
          type: 'string',
          example: 'Elma-carron@mail.com',
        },
        password: {
          type: 'string',
          example: 'password$admin2318',
        },
        adminPass: {
          type: 'string',
          example: 'admin$pass&6284',
        },
      },
    },
  },
};

module.exports = { requestAdminSchema };
