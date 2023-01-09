const requestLanguagesSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'English',
    },
    level: {
      type: 'string',
      example: 'B2',
    },
  }
};

module.exports = { requestLanguagesSchema };
