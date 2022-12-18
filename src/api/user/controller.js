const helper = require('./helper');

const createUserController = async (req, res, next) => {
  try {
    const { data } = req.body;
    const result = await helper.createUserHelper(data);
    return res.send(result).status(201);
  } catch (error) {
    next(error);
  }
}

const getUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await helper.getUserHelper(id);
    return res.send(result).status(200);
  } catch (error) {
    next(error);
  }
}

const updateUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } =req.body;
    await helper.updateUserHelper(id, data);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
}

const deleteUserController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await helper.deleteUserHelper(id);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createUserController,
  getUserController,
  updateUserController,
  deleteUserController,
}