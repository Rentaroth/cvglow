const helper = require('./helper');

const createAditionalsController = async (req, res, next) => {
  try {
    const { data } = req.body;
    const result = await helper.createAditionalsHelper(data);
    return res.send(result).status(201);
  } catch (error) {
    next(error);
  }
};

const getAditionalsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await helper.getAditionalsHelper(id);
    return res.send(result).status(200);
  } catch (error) {
    next(error);
  }
};

const updateAditionalsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = req.body;
    await helper.updateAditionalsHelper(id, data);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
};

const deleteAditionalsController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await helper.deleteAditionalsHelper(id);
    return res.send({ body: 'Done!' }).status(200);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAditionalsController,
  getAditionalsController,
  updateAditionalsController,
  deleteAditionalsController,
}