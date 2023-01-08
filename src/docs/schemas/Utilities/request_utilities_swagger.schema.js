const requestUtilitiesSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Excel',
    },
    description: {
      type: 'string',
      example: 'Utility for making math operations faster.',
    },
    education_id: {
      type: 'integer',
      example: 52974231,
    },
  }
};

module.exports = { requestUtilitiesSchema };