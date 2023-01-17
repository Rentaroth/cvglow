const { get } = require('./user_get_swagger.path');
const { getUsers } = require('./user_get_admin_swagger.path');
const { post } = require('./user_post_swagger.path');
const { put } = require('./user_put_swagger.path');
const { erase } = require('./user_delete_swagger.path');

const userPath = {
  post,
  get: getUsers,
}
const userPathId = {
  get,
  put,
  delete: erase,
}

module.exports = { userPath, userPathId };