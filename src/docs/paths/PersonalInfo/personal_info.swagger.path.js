const { get } = require('./person_get_swagger.path');
const { post } = require('./person_post_swagger.path');
const { put } = require('./person_put_swagger.path');
const { erase } = require('./person_delete_swagger.path');

const personalInfoPath = {
  post,
  get,
}
const personalInfoPathId = {
  get,
  put,
  delete: erase,
}

module.exports = { personalInfoPath, personalInfoPathId };