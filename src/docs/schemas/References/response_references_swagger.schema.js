const referencesSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 83672937,
    },
    name: {
      type: 'string',
      example: 'Aquiles',
    },
    last_name: {
      type: 'string',
      example: 'Traigo',
    },
    profession: {
      type: 'string',
      example: 'Astronaut',
    },
    company: {
      type: 'string',
      example: 'NASA',
    },
    country: {
      type: 'string',
      example: 'USA',
    },
    city: {
      type: 'string',
      example: 'California',
    },
    region: {
      type: 'string',
      example: '+XX',
    },
    phone: {
      type: 'integer',
      example: 1234567890,
    },
    person_id: {
      type: 'integer',
      example: 16902491,
    },
    created_at: {
      type: 'datetime',
      example: '2022-12-22T20:40:58.000Z',
    },
    updated_at: {
      type: 'datetime',
      example: '2022-12-22T20:40:58.000Z',
    },
  },
};

module.exports = { referencesSchema };
