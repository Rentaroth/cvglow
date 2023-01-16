const requestTechSkillsSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Spider Sernse',
        },
        proficiency: {
          type: 'string',
          example: 'Master Degree',
        },
      },
    },
  },
};

module.exports = { requestTechSkillsSchema };
