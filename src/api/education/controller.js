const helper = require('./helper');

const createEducationController = async (req, res) => {
  const { data } = req.body;
  const result = await helper.createEducationHelper(data);
  res.send(result).status(201);
}

const getEducationController = async (req, res) => {
  const { id } = req.params;
  const { join } = req.query;
  const result = await helper.getEducationHelper(id, join);
  res.send(result).status(200);
};

const updateEducationController = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  await helper.editEducationHelper(id, data);
  res.send({ body: 'Done!' }).status(203);
};

const eraseEducationController = async (req, res) => {
  const { id } = req.params;
  await helper.eraseEducationHelper(id);
  res.send({ body: 'Done!'}).status(203);
};

module.exports = {
  createEducationController,
  getEducationController,
  updateEducationController,
  eraseEducationController,
}