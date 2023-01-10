const requestSkillsSchema = {
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
};

module.exports = { requestSkillsSchema };