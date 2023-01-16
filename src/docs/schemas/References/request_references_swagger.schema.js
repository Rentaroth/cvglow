const requestReferencesSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
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
      },
    },
  },
};

module.exports = { requestReferencesSchema };
