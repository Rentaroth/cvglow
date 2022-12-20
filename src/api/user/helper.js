const entity = require('./entity');
const { customAlphabet } = require('nanoid');
const nanoid = customAlphabet('12345678909', 8);
const bcrypt = require('bcrypt');
const auth = require('../../services/auth');

const createUserHelper = async (data) => {
  data.id = nanoid(8);
  data.password = await bcrypt.hash(data.password, 5);
  data.createdAt = new Date();
  data.updatedAt = new Date();
  const UserEntity = new entity(data);
  const result = await UserEntity.createUserEntity();
  return result;
};

const getUserHelper = async (id, extended) => {
  const extend = extended === 'true' ? true : false;
  const UserEntity = new entity({ id, extend });
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

const authorization = async (data) => {
  if(data.userName) {
    const UserEntity = new entity(data);
    const userArrived = await UserEntity.getUserBy();
    const user = userArrived[0];
    const passTest = await bcrypt.compare(data.password, user.password);
    if(!passTest) {
      throw new Error('Incorrect username or password!');
    }
    const token = auth.generateToken(user);
    return token;
  } else if(data.eMail) {
    const UserEntity = new entity(data);
    const userArrived = await UserEntity.getUserBy();
    const user = userArrived[0];
    const passTest = await bcrypt.compare(data.password, user.password);
    if(!passTest) {
      throw new Error('Incorrect username or password!');
    }
    const token = auth.generateToken(user);
    return token;
  } else {
    throw new Error('Not enough data to login!');
  }
};

module.exports = {
  createUserHelper,
  getUserHelper,
  updateUserHelper,
  deleteUserHelper,
  authorization,
};
