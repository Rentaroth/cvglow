const responseSkillsSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      example: 23817362,
    },
    name: {
      type: 'string',
      example: 'Spider Sernse',
    },
    proficiency: {
      type: 'string',
      example: 'Master Degree',
    },
    person_id: {
      type: 'integer',
      example: 52974231,
    },
    created_at: {
      type: 'datetime',
      example: '2022-12-22T20:43:41.000Z',
    },
    updated_at: {
      type: 'datetime',
      example: '2022-12-22T20:43:41.000Z',
    },
  },
};

module.exports = { responseSkillsSchema };
