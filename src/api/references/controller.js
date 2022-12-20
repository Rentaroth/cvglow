const helper = require('./helper');

const createReferenceController = async (req, res, next) => {
  try {
    const { data } = req.body;
    const result = await helper.createReferenceHelper(data);
    return res.send(result).status(201);
  } catch (error) {
    next(error);
  }
}
const getReferenceController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await helper.getReferenceHelper(id);
    return res.send(result).status(200);
  } catch (error) {
    next(error);
  }
}
const updateReferenceController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data }= req.body;
    await helper.updateReferenceHelper(id, data);
    return res.send('Done!').status(200);
  } catch (error) {
    next(error);
  }
}
const deleteReferenceController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await helper.deleteReferenceHelper(id);
    return res.send('Done!').status(200);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createReferenceController,
  getReferenceController,
  updateReferenceController,
  deleteReferenceController,
}