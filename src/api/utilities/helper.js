const UtilitiesEntity = require('./entity');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 8);

const createUtilityHelper = async (data) => {
  data.id = nanoid(8);
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const UtilEntity = new UtilitiesEntity(data);
  const result = await UtilEntity.createUtilityEntity();
  return result;
}

const getUtilityHelper = async (id) => {
  const UtilEntity = new UtilitiesEntity({ id });
  const result = await UtilEntity.getUtilityEntity();
  return result;
}

const updateUtilityHelper = async (id, data) => {
  data.id = id;
  data.updatedAt = new Date();
  const UtilEntity = new UtilitiesEntity(data);
  const result = await UtilEntity.updateUtilityEntity();
  return result;
}

const deleteUtilityHelper = async (id) => {
  const UtilEntity = new UtilitiesEntity({ id });
  const result = await UtilEntity.deleteUtilityEntity();
  return result;
}

module.exports = {
  createUtilityHelper,
  getUtilityHelper,
  updateUtilityHelper,
  deleteUtilityHelper,
}