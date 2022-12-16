const helper = require('./helper');

const createTechSkillsController = async (req, res, next) => {
  try {
    const { data } = req.body;
    const result = await helper.createTechSkillsHelper(data);
    return res.send(result).status(201);
  } catch (error) {
    next(error);
  }
}

const getTechSkillsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await helper.getTechSkillsHelper(id);
    return res.send(result).status(200);
  } catch (error) {
    next(error);
  }
}

const updateTechSkillsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    await helper.updateTechSkillsHelper(id, data);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
}

const deleteTechSkillsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await helper.deleteTechSkillsHelper(id);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTechSkillsController,
  getTechSkillsController,
  updateTechSkillsController,
  deleteTechSkillsController,
}