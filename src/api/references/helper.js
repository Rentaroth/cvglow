const ReferencesEntity = require('./entity');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 8);

const createReferenceHelper = async (data) => {
  data.id = nanoid(8);
  const { authorized } = data;
  data.personId = authorized.personId;
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const RefEntity = new ReferencesEntity(data);
  const result = await RefEntity.createReferenceEntity();
  return result;
};

const getReferenceHelper = async (id) => {
  const RefEntity = new ReferencesEntity({ id });
  const result = await RefEntity.getReferenceEntity();
  return result;
}

const updateReferenceHelper = async (id, data) => {
  data.id = id;
  data.updatedAt = new Date();
  const RefEntity = new ReferencesEntity(data);
  const result = await RefEntity.updateReferenceEntity();
  return result;
}

const deleteReferenceHelper = async (id) => {
  const RefEntity = new ReferencesEntity({ id });
  const result = await RefEntity.deleteReferenceEntity();
  return result;
}

module.exports = {
  createReferenceHelper,
  getReferenceHelper,
  updateReferenceHelper,
  deleteReferenceHelper,
}