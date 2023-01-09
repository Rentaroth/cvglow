const helper = require('./helper');

const createExperienceController = async (req, res, next) => {
  try {
    const { data } = req.body;
    const { aproved } = req;
    data.authorized = aproved;
    const result = await helper.createExperienceHelper(data);
    return res.send(result).status(201);
  } catch (error) {
    next(error);
  }
}

const getExperienceController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await helper.getExperienceHelper(id);
    return res.send(result).status(200);
  } catch (error) {
    next(error);
  }
}

const updateExperienceController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    await helper.updateExperienceHelper(id, data);
    return res.send('Done!').status(200);
  } catch (error) {
    next(error);
  }
}

const deleteExperienceController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await helper.deleteExperienceHelper(id);
    return res.send('Done!').status(200);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createExperienceController,
  getExperienceController,
  updateExperienceController,
  deleteExperienceController,
}