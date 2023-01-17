const { get } = require('./education_get_swagger.path');
const { post } = require('./education_post_swagger.path');
const { put } = require('./education_put_swagger.path');
const { erase } = require('./education_delete_swagger.path');

const educationPath = {
  post,
  get,
}
const educationPathId = {
  get,
  put,
  delete: erase,
}

module.exports = { educationPath, educationPathId };