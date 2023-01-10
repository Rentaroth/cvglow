const responseExperienceSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 19273628,
    },
    company: {
      type: 'string',
      example: 'Palmitos S.A.',
    },
    position: {
      type: 'string',
      example: 'Production Engineer',
    },
    start_date: {
      type: 'datetime',
      example: '2023-01-07T00:46:09.000Z',
    },
    end_date: {
      type: 'datetime',
      example: '2023-01-07T00:46:09.000Z',
    },
    person_in_charge: {
      type: 'string',
      example: 'Elsa Pato',
    },
    contact: {
      type: 'integer',
      example: 3628372935,
    },
    person_id: {
      type: 'integer',
      example: 47283926,
    },
    created_at: {
      type: 'datetime',
      example: '2023-01-07T00:46:09.000Z',
    },
    updated_at: {
      type: 'datetime',
      example: '2023-01-07T00:46:09.000Z',
    },
  }
}

module.exports = { responseExperienceSchema };