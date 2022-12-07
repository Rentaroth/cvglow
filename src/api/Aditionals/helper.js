const AditionalsEntity = require('./entity');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 8);

const createAditionalsHelper = async (data) => {
  data.id = nanoid();
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const AditionEntity = new AditionalsEntity(data);
  const result = await AditionEntity.createAditionalsEntity();
  return result;
}

const getAditionalsHelper = async (id) => {
  const AditionEntity = new AditionalsEntity({ id });
  const result = await AditionEntity.getAditionalsEntity();
  return result;
}

const updateAditionalsHelper = async (id, data) => {
  data.id = id;
  data.updatedAt = new Date();
  const AditionEntity = new AditionalsEntity(data);
  const result = await AditionEntity.updateAditionalsEntity();
  return result;
}

const deleteAditionalsHelper = async (id) => {
  const AditionEntity = new AditionalsEntity({ id });
  const result = await AditionEntity.deleteAditionalsEntity();
  return result;
}

module.exports = {
  createAditionalsHelper,
  getAditionalsHelper,
  updateAditionalsHelper,
  deleteAditionalsHelper,
}