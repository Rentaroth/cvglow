const requestUserSchema = {
  type: 'object',
  properties: {
    userName: {
      type: 'string',
      example: 'Elma-carron',
    },
    password: {
      type: 'string',
      example: 'pasword@user1927346',
    },
    eMail: {
      type: 'string',
      example: 'Elma-carron@mail.com',
    },
  },
};

module.exports = { requestUserSchema };
