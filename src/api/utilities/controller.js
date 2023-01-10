const helper = require('./helper');

const createUtilityController = async (req, res, next) => {
  try {
    const { data } = req.body;
    const result = await helper.createUtilityHelper(data);
    return res.send(result).status(201);
  } catch (error) {
    next(error);
  }
};

const getUtilityController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await helper.getUtilityHelper(id);
    return res.send(result).status(200);
  } catch (error) {
    next(error);
  }
};

const updateUtilityController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    await helper.updateUtilityHelper(id, data);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
};

const deleteUtilityController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await helper.deleteUtilityHelper(id);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUtilityController,
  getUtilityController,
  updateUtilityController,
  deleteUtilityController,
}