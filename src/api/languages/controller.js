const helper = require('./helper');

const createLanguagesController = async (req, res, next) => {
  try {
    const { data } = req.body;
    data.authorizated = req.aproved;
    const result = await helper.createLanguagesHelper(data);
    return res.send(result).status(201);
  } catch (error) {
    next(error);
  }
}

const getLanguagesController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await helper.getLanguagesHelper(id);
    return res.send(result).status(200);
  } catch (error) {
    next(error);
  }
}

const updateLanguagesController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    await helper.updateLanguagesHelper(id, data);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
}

const deleteLanguagesController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await helper.deleteLanguagesHelper(id);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createLanguagesController,
  getLanguagesController,
  updateLanguagesController,
  deleteLanguagesController,
}