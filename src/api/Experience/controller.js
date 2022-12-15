const helper = require('./helper');

const createExperienceController = async (req, res) => {
  const { data } = req.body;
  const result = await helper.createExperienceHelper(data);
  return res.send(result).status(201);
}

const getExperienceController = async (req, res) => {
  const { id } = req.params;
  const result = await helper.getExperienceHelper(id);
  return res.send(result).status(200);
}

const updateExperienceController = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  await helper.updateExperienceHelper(id, data);
  return res.send('Done!').status(200);
}

const deleteExperienceController = async (req, res) => {
  const { id } = req.params;
  await helper.deleteExperienceHelper(id);
  return res.send('Done!').status(200);
}

module.exports = {
  createExperienceController,
  getExperienceController,
  updateExperienceController,
  deleteExperienceController,
}