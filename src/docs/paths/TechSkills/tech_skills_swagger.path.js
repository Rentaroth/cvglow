const { get } = require('./tech_skills_get_swagger.path');
const { post } = require('./tech_skills_post_swagger.schema');
const { put } = require('./tech_skills_put_swagger.path');
const { erase } = require('./tech_skills_delete_swagger.path');

const techSkillsPath = {
  post,
  get,
};
const techSkillsPathId = {
  get,
  put,
  delete: erase,
}

module.exports = { techSkillsPath, techSkillsPathId };