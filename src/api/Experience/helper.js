const ExperienceEntity = require('./entity');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 8);

const createExperienceHelper = async (data) => {
  data.id = nanoid();
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const ExpEntity = new ExperienceEntity(data);
  const result = await ExpEntity.createExperienceEntity();
  return result;
}

const getExperienceHelper = async (id) => {
  const ExpEntity = new ExperienceEntity({ id });
  const result = await ExpEntity.getExperienceEntity();
  return result;
}

const updateExperienceHelper = async (id, data) => {
  data.id = id;
  data.updatedAt = new Date();
  const ExpEntity = new ExperienceEntity(data);
  const result = await ExpEntity.updateExperienceEntity();
  return result;
}

const deleteExperienceHelper = async (id) => {
  const ExpEntity = new ExperienceEntity({ id });
  const result = await ExpEntity.deleteExperienceEntity();
  return result;
}

module.exports = {
  createExperienceHelper,
  getExperienceHelper,
  updateExperienceHelper,
  deleteExperienceHelper,
}