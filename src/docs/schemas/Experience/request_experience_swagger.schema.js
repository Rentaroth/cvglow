const requestExperienceSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        company: {
          type: 'string',
          example: 'Palmitos S.A.',
        },
        position: {
          type: 'string',
          example: 'Production Engineer',
        },
        startDate: {
          type: 'datetime',
          example: '2023-01-07T00:46:09.000Z',
        },
        endDate: {
          type: 'datetime',
          example: '2023-01-07T00:46:09.000Z',
        },
        personInCharge: {
          type: 'string',
          example: 'Elsa Pato',
        },
        contact: {
          type: 'integer',
          example: 3628372935,
        },
      },
    },
  },
};

module.exports = { requestExperienceSchema };
