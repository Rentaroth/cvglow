const helper = require('./helper');

const addPersonalInfo = async (req, res, next) => {
  try {
    const { data } = req.body;
    const result = await helper.writePersonalInfo(data);
    return res.send(result).status(201);
  } catch (error) {
    next(error);
  }
};

const bringPersonalInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { group } = req.query;
    const result = await helper.bringPersonalInfo(id, group);
    return res.send(result).status(200);
  } catch (error) {
    next(error);
  }
};

const modifyPersonalInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { info } = req.body;
    await helper.editPersonalInfo(id, info);
    return res.send('Done!').status(200);
  } catch (error) {
    next(error);
  }
};

const erasePersonalInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    await helper.removePersonalInfo(id);
    return res.send('Done!').status(203);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  bringPersonalInfo,
  addPersonalInfo,
  modifyPersonalInfo,
  erasePersonalInfo,
};
