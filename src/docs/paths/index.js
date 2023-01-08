const { userPath } = require('./User/user_swagger.path');
const { personalInfoPath } = require('./PersonalInfo/personal_info.swagger.path');
const { languagesPath } = require('./Languages/languages_swagger.path');
const { referencesPath } = require('./References/references_swagger.path');
const { skillsPath } = require('./Skills/skills_swagger.path');
const { experiencePath } = require('./Experience/experience_swagger.path');
const { techSkillsPath } = require('./TechSkills/tech_skills_swagger.path');
const { utilitiesPath } = require('./Utilities/utilities_swagger.path');
const { aditionalsPath } = require('./Aditionals/aditionals_swagger.path');
const { educationPath } = require('./Education/education_swagger.path');

module.exports = {
  userPath,
  personalInfoPath,
  languagesPath,
  referencesPath,
  skillsPath,
  experiencePath,
  techSkillsPath,
  utilitiesPath,
  aditionalsPath,
  educationPath,
}