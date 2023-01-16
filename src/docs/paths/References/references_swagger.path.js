const { get } = require('./references_get_swagger.path');
const { post } = require('./references_post_swagger.path');
const { put } = require('./references_put_swagger.path');
const { erase } = require('./references_delete_swagger.path');

const referencesPath = {
  get,
  post,
  put,
  delete: erase,
}

module.exports = { referencesPath };