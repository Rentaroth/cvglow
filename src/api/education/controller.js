const helper = require('./helper');

const createEducationController = async (req, res, next) => {
  try {
    const { data } = req.body;
    const { aproved } = req;
    data.authorized = aproved;
    const result = await helper.createEducationHelper(data);
    res.send(result).status(201);
  } catch (error) {
    next(error);
  }
}

const getEducationController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { join } = req.query;
    const result = await helper.getEducationHelper(id, join);
    res.send(result).status(200);
  } catch (error) {
    next(error);
  }
};

const updateEducationController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    await helper.editEducationHelper(id, data);
    res.send({ body: 'Done!' }).status(203);
  } catch (error) {
    next(error);
  }
};

const eraseEducationController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await helper.eraseEducationHelper(id);
    res.send({ body: 'Done!'}).status(203);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createEducationController,
  getEducationController,
  updateEducationController,
  eraseEducationController,
}