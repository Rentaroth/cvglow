const config = require('../../config');
const auth = require('../auth');

const validateAdmin = (req, res, next) => {
  const { adminPass } = req.body.data;
  if (adminPass !== config.admin.pass) {
    const error = new Error('Incorrect adminPass');
    error.user = { message: 'Data not valid for creating an admin account.' };
    error.status = 401;
    throw error;
  }
  req.isAdmin = true;
  return next();
};

const adminPermission = async (req, res, next) => {
  const token = req.aproved;
  try {
    if (!token.isAdmin) {
      const error = new Error('Not authorized!');
      error.user = { message: 'User have not permission for this action!' };
      error.status = 403;
      throw error;
    }
    return next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateAdmin,
  adminPermission,
};
