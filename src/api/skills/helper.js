const SkillsEntity = require('./entity');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 8);

const createSkillsHelper = async (data) => {
  data.id = nanoid();
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const SkillEntity = new SkillsEntity(data);
  const result = await SkillEntity.createSkillsEntity();
  return result;
};

const getSkillsHelper = async (id) => {
  const SkillEntity = new SkillsEntity({ id });
  const result = await SkillEntity.getSkillsEntity();
  return result;
}

const updateSkillsHelper = async (id, data) => {
  data.id = id;
  data.updatedAt = new Date();
  const SkillEntity = new SkillsEntity(data);
  const result = await SkillEntity.updateSkillsEntity();
  return result;
};

const deleteSkillsHelper = async (id) => {
  const SkillEntity = new SkillsEntity({ id });
  const result = await SkillEntity.deleteSkillsEntity();
  return result;
}

module.exports = {
  createSkillsHelper,
  getSkillsHelper,
  updateSkillsHelper,
  deleteSkillsHelper,
}