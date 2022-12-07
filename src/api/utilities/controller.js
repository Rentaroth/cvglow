const helper = require('./helper');

const createUtilityController = async (req, res) => {
  const { data } = req.body;
  const result = await helper.createUtilityHelper(data);
  return res.send(result).status(201);
};

const getUtilityController = async (req, res) => {
  const { id } = req.params;
  const result = await helper.getUtilityHelper(id);
  return res.send(result).status(200);
};

const updateUtilityController = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  await helper.updateUtilityHelper(id, data);
  return res.send({ body: 'Done!' }).status(200);
};

const deleteUtilityController = async (req, res) => {
  const { id } = req.params;
  await helper.deleteUtilityHelper(id);
  return res.send({ body: 'Done!' }).status(200);
};

module.exports = {
  createUtilityController,
  getUtilityController,
  updateUtilityController,
  deleteUtilityController,
}