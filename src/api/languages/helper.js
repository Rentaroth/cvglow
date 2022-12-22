const LanguagesEntity = require('./entity');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('1234567890', 8);

const createLanguagesHelper = async (data) => {
  data.id = nanoid(8);
  const { authorizated } = data;
  data.personId = authorizated.id;
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const LangEntity = new LanguagesEntity(data);
  const result = await LangEntity.createLanguagesEntity();
  return result;
};

const getLanguagesHelper = async (id) => {
  const LangEntity = new LanguagesEntity({ id });
  const result = await LangEntity.getLanguagesEntity();
  return result;
}

const updateLanguagesHelper = async (id, data) => {
  data.id = id;
  data.updatedAt = new Date();
  const LangEntity = new LanguagesEntity(data);
  const result = await LangEntity.updateLanguagesEntity();
  return result;
};

const deleteLanguagesHelper = async (id) => {
  const LangEntity = new LanguagesEntity({ id });
  const result = await LangEntity.deleteLanguagesEntity();
  return result;
}

module.exports = {
  createLanguagesHelper,
  getLanguagesHelper,
  updateLanguagesHelper,
  deleteLanguagesHelper,
}