const EducationEntity = require('./entity');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 8);

const createEducationHelper = async (data) => {
  data.id = nanoid(8);
  const { authorized } = data;
  data.personId = authorized.personId;
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const eduEntity = new EducationEntity(data);

  const result = eduEntity.createEducationEntity();
  return result;
};

const getEducationHelper = async (id, join) => {
  const info = {
    id,
    join,
  };
  const eduEntity = new EducationEntity(info);

  const result = await eduEntity.getEducationEntity();
  return result;
};

const editEducationHelper = async (id, data) => {
  data.id = id;
  data.updatedAt = new Date();
  const eduEntity = new EducationEntity(data);
  const result = await eduEntity.updateEducationEntity();
  return result;
};

const eraseEducationHelper = async (id) => {
  const eduEntity = new EducationEntity({ id });
  const result = await eduEntity.eraseEducationEntity();
  return result;
};

module.exports = {
  createEducationHelper,
  getEducationHelper,
  editEducationHelper,
  eraseEducationHelper,
}