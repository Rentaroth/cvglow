const PersonalInfo = require('./entity');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 8);

const writePersonalInfo = async (data) => {
  data.id = parseInt(nanoid());
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const entity = new PersonalInfo(data);
  const result = await entity.createPersonalInfo();
  return result;
};

const bringPersonalInfo = async (id) => {
  const entity = new PersonalInfo({ id });
  const result = await entity.getPersonalInfo();
  return result;
};

const editPersonalInfo = async (id, data) => {
  data.id = id;
  data.updatedAt = new Date();
  const entity = new PersonalInfo(data);
  const result = await entity.updatePersonalInfo();
  return result;
};

const removePersonalInfo = async (id) => {
  const entity = new PersonalInfo({ id });
  const result = await entity.deletePersonalInfo();
  return result;
};

module.exports = {
  bringPersonalInfo,
  writePersonalInfo,
  editPersonalInfo,
  removePersonalInfo,
};
