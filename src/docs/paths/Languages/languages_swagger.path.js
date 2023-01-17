const { get } = require('./languages_get_swagger.path');
const { post } = require('./languages_post_swagger.path');
const { put } = require('./languages_put._swagger.path');
const { erase } = require('./languages_delete_swagger.path');

const languagesPath = {
  post,
  get,
}
const languagesPathId = {
  get,
  put,
  delete: erase,
}

module.exports = { languagesPath, languagesPathId };