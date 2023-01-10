const { get } = require('./aditionals_get_swagger.path');
const { post } = require('./aditionals_post_swagger.path');
const { put } = require('./aditionals_put_swagger.path');
const { erase } = require('./aditionals_delete_swagger.path');

const aditionalsPath = {
  get,
  post,
  put,
  delete: erase,
}

module.exports = { aditionalsPath };