const PersonalInfo = require('./entity');

const writePersonalInfo = async (data) => {
  const { authorized } = data;
  data.id = authorized.personId;
  data.userId = authorized.id;
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
  let info = {
    id: id,
    ...data,
    updatedAt: new Date(),
  };
  //data.id = id;
  //data.updatedAt = new Date();
  const entity = new PersonalInfo(info);
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
