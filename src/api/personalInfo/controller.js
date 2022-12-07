const helper = require('./helper');

const addPersonalInfo = async (req, res) => {
  const { data } = req.body;
  const result = await helper.writePersonalInfo(data);
  return res.send(result).status(201);
};

const bringPersonalInfo = async (req, res) => {
  const { id } = req.params;
  const result = await helper.bringPersonalInfo(id);
  return res.send(result).status(200);
};

const modifyPersonalInfo = async (req, res) => {
  const { id } = req.params;
  const { info } = req.body;
  await helper.editPersonalInfo(id, info);
  return res.send('Done!').status(200);
};

const erasePersonalInfo = async (req, res) => {
  const { id } = req.params;
  await helper.removePersonalInfo(id);
  return res.send('Done!').status(203);
};

module.exports = {
  bringPersonalInfo,
  addPersonalInfo,
  modifyPersonalInfo,
  erasePersonalInfo,
};
