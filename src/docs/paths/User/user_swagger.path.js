const { get } = require('./user_get_swagger.path');
const { post } = require('./user_post_swagger.path');
const { put } = require('./user_put_swagger.path');
const { erase } = require('./user_delete_swagger.path');

const userPath = {
  post,
  get,
}
const userPathId = {
  get,
  put,
  delete: erase,
}

module.exports = { userPath, userPathId };