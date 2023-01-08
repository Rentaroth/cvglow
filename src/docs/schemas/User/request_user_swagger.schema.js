const requestUserSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 837492318,
    },
    userName: {
      type: 'string',
      example: 'Elma-carron',
    },
    eMail: {
      type: 'string',
      example: 'Elma-carron@mail.com',
    },
  },
};

module.exports = { requestUserSchema };
