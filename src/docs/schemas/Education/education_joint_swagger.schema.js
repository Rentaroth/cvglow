const educationJoinSchema = {
  properties: {
    Education: {
      $ref: '#/components/schemas/responseEducationSchema',
    },
    Utilities: {
      $ref: '#/components/schemas/responseUtilitiesSchema',
    },
    Aditionals: {
      $ref: '#/components/schemas/responseAditionalsSchema',
    },
  },
};

module.exports = { educationJoinSchema };
