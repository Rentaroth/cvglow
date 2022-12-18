const entity = require('./entity');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('12345678909', 8);

const createUserHelper = async (data) => {
  data.id = nanoid(8);
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const UserEntity = new entity(data);
  const result = await UserEntity.createUserEntity();
  return result;
};

const getUserHelper = async (id) => {
  const UserEntity = new entity({ id });
  const result = await UserEntity.getUserEntity();
  return result;
};

const updateUserHelper = async (id, data) => {
  data.id = id;
  data.updatedAt = new Date();
  const UserEntity = new entity(data);
  const result = await UserEntity.updateUserEntity();
  return result;
};

const deleteUserHelper = async (id) => {
  const UserEntity = new entity({ id });
  const result = await UserEntity.deleteUserEntity();
  return result;
};

module.exports = {
  createUserHelper,
  getUserHelper,
  updateUserHelper,
  deleteUserHelper,
};
