const { userPath, userPathId } = require('./User/user_swagger.path');
const {
  personalInfoPath,
  personalInfoPathId,
} = require('./PersonalInfo/personal_info.swagger.path');
const {
  languagesPath,
  languagesPathId,
} = require('./Languages/languages_swagger.path');
const {
  referencesPath,
  referencesPathId,
} = require('./References/references_swagger.path');
const { skillsPath, skillsPathId } = require('./Skills/skills_swagger.path');
const {
  experiencePath,
  experiencePathId,
} = require('./Experience/experience_swagger.path');
const {
  techSkillsPath,
  techSkillsPathId,
} = require('./TechSkills/tech_skills_swagger.path');
const {
  utilitiesPath,
  utilitiesPathId,
} = require('./Utilities/utilities_swagger.path');
const {
  aditionalsPath,
  aditionalsPathId,
} = require('./Aditionals/aditionals_swagger.path');
const {
  educationPath,
  educationPathId,
} = require('./Education/education_swagger.path');
const { adminPath } = require('./Admin/admin_swagger.path');
const { loginPath } = require('./Login/login_swagger.path');
const { keepSessionPath } = require('./KeepSession/keep_session_swagger.path');

module.exports = {
  userPath,
  userPathId,
  personalInfoPathId,
  personalInfoPath,
  languagesPath,
  languagesPathId,
  referencesPath,
  referencesPathId,
  skillsPath,
  skillsPathId,
  experiencePath,
  experiencePathId,
  techSkillsPath,
  techSkillsPathId,
  utilitiesPath,
  utilitiesPathId,
  aditionalsPath,
  aditionalsPathId,
  educationPath,
  educationPathId,
  adminPath,
  loginPath,
  keepSessionPath,
};
