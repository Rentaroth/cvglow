const helper = require('./helper');

const createLanguagesController = async (req, res) => {
  const { data } = req.body;
  const result = await helper.createLanguagesHelper(data);
  return res.send(result).status(201);
}

const getLanguagesController = async (req, res) => {
  const { id } = req.params;
  const result = await helper.getLanguagesHelper(id);
  return res.send(result).status(200);
}

const updateLanguagesController = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  await helper.updateLanguagesHelper(id, data);
  return res.send({ body: 'Done!' }).status(200);
}

const deleteLanguagesController = async (req, res) => {
  const { id } = req.params;
  await helper.deleteLanguagesHelper(id);
  return res.send({ body: 'Done!' }).status(200);
}

module.exports = {
  createLanguagesController,
  getLanguagesController,
  updateLanguagesController,
  deleteLanguagesController,
}