const responseLanguagesSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 82627253,
    },
    name: {
      type: 'string',
      example: 'English',
    },
    level: {
      type: 'string',
      example: 'B2',
    },
    person_id: {
      type: 'integer',
      example: 38425312,
    },
    created_at: {
      type: 'datetime',
      example: '2022-12-22T20:36:38.000Z',
    },
    updated_at: {
      type: 'datetime',
      example: '2022-12-22T20:36:38.000Z'
    },
  }
};

module.exports = { responseLanguagesSchema };