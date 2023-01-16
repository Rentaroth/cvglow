const requestPersonalInfoSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Greta',
        },
        secondName: {
          type: 'string',
          example: 'Alicia',
        },
        lastName: {
          type: 'string',
          example: 'Quintero',
        },
        secondLastName: {
          type: 'string',
          example: 'Arellano',
        },
        email: {
          type: 'string',
          example: 'aliciagreta@mail.com',
        },
        linkedIn: {
          type: 'string',
          example: 'http://linkedin.com/aliceG',
        },
        region: {
          type: 'string',
          example: '+57',
        },
        phone: {
          type: 'integer',
          example: 3458271834,
        },
        portfolio: {
          type: 'string',
          example: 'http://github.com/grettel',
        },
        about: {
          type: 'string',
          example:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pellentesque, lacus vel ullamcorper maximus, sem libero scelerisque eros, vel iaculis.',
        },
      },
    },
  },
};

module.exports = { requestPersonalInfoSchema };
