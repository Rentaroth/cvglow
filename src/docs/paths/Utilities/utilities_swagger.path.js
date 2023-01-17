const { get } = require('./utilities_get_swagger.path');
const { post } = require('./utilities_post_swagger.path');
const { put } = require('./utilities_put_swagger.path');
const { erase } = require('./utilities_delete_swagger.path');

const utilitiesPath = {
  post,
  get,
}
const utilitiesPathId = {
  get,
  put,
  delete: erase,
}

module.exports = { utilitiesPath, utilitiesPathId };