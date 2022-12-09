const TechSkillsEntity = require('./entity');

const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 8);

const createTechSkillsHelper = async (data) => {
  data.id = nanoid();
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const TechSkillEntity = new TechSkillsEntity(data);
  const result = await TechSkillEntity.createTechSkillsEntity();
  return result;
};

const getTechSkillsHelper = async (id) => {
  const TechSkillEntity = new TechSkillsEntity({ id });
  const result = await TechSkillEntity.getTechSkillsEntity();
  return result;
}

const updateTechSkillsHelper = async (id, data) => {
  data.id = id;
  data.updatedAt = new Date();
  const TechSkillEntity = new TechSkillsEntity(data);
  const result = await TechSkillEntity.updateTechSkillsEntity();
  return result;
};

const deleteTechSkillsHelper = async (id) => {
  const TechSkillEntity = new TechSkillsEntity({ id });
  const result = await TechSkillEntity.deleteTechSkillsEntity();
  return result;
}

module.exports = {
  createTechSkillsHelper,
  getTechSkillsHelper,
  updateTechSkillsHelper,
  deleteTechSkillsHelper,
}