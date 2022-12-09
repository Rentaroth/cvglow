const helper = require('./helper');

const createSkillsController = async (req, res) => {
  const { data } = req.body;
  const result = await helper.createSkillsHelper(data);
  return res.send(result).status(201);
}

const getSkillsController = async (req, res) => {
  const { id } = req.params;
  const result = await helper.getSkillsHelper(id);
  return res.send(result).status(200);
}

const updateSkillsController = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  await helper.updateSkillsHelper(id, data);
  return res.send({ body: 'Done!' }).status(200);
}

const deleteSkillsController = async (req, res) => {
  const { id } = req.params;
  await helper.deleteSkillsHelper(id);
  return res.send({ body: 'Done!' }).status(200);
}

module.exports = {
  createSkillsController,
  getSkillsController,
  updateSkillsController,
  deleteSkillsController,
}