const helper = require('./helper');

const createSkillsController = async (req, res, next) => {
  try {
    const { data } = req.body;
    const { aproved } = req;
    data.authorized = aproved;
    const result = await helper.createSkillsHelper(data);
    return res.send(result).status(201);
  } catch (error) {
    next(error);
  }
}

const getSkillsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await helper.getSkillsHelper(id);
    return res.send(result).status(200);
  } catch (error) {
    next(error);
  }
}

const updateSkillsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    await helper.updateSkillsHelper(id, data);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
}

const deleteSkillsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await helper.deleteSkillsHelper(id);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createSkillsController,
  getSkillsController,
  updateSkillsController,
  deleteSkillsController,
}