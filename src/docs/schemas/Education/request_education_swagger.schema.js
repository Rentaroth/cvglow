const requestEducationSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Engineer',
    },
    enphasis: {
      type: 'string',
      example: 'Industrial Processes',
    },
  },
};

module.exports = { requestEducationSchema };