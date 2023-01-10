const personalInfoSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 48273947,
    },
    name: {
      type: 'string',
      example: 'Greta',
    },
    second_name: {
      type: 'string',
      example: 'Alicia',
    },
    last_Name: {
      type: 'string',
      example: 'Quintero',
    },
    second_last_name: {
      type: 'string',
      example: 'Arellano',
    },
    email: {
      type: 'string',
      example: 'aliciagreta@mail.com',
    },
    linked_in: {
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
    user_id: {
      type: 'integer',
      example: 37462983,
    },
    created_at: {
      type: 'string',
      example: '2022-12-22T19:40:19.000Z',
    },
    updated_at: {
      type: 'string',
      example: '2022-12-22T19:40:19.000Z',
    },
  },
};

module.exports = { personalInfoSchema };
