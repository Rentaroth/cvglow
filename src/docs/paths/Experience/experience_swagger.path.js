const { get } = require('./experience_get_swagger.path');
const { post } = require('./experience_post_swagger.path');
const { put } = require('./experience_put_swagger.path');
const { erase } = require('./experience_delete_swagger.path');

const experiencePath = {
  get,
  post,
  put,
  delete: erase,
}

module.exports = { experiencePath };