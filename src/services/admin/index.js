const config = require('../../config');

const validateAdmin = (req, res, next) => {
  const { adminPass } = req.body.data;
  if(adminPass !== config.admin.pass) {
    const error = new Error('Incorrect adminPass');
    error.user = { message: 'Data not valid for creating an admin account.' };
    error.status = 401;
    throw error;
  }
  req.isAdmin = true;
  return next();
}

module.exports = {
  validateAdmin,
}