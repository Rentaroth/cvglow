const { get } = require('./skills_get_swagger.path');
const { post } = require('./skills_post_swagger.path');
const { put } = require('./skills_put_swagger.path');
const { erase } = require('./skils_delete_swagger.path');

const skillsPath = {
  post,
  get,
}
const skillsPathId = {
  get,
  put,
  delete: erase,
}

module.exports = { skillsPath, skillsPathId };