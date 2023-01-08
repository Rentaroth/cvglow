const {
  responseUserSchema,
  requestUserSchema,
  modRequestUserSchema,
  jointUser,
} = require('./User');
const { BearerAuth } = require('./security');
const {
  personalInfoSchema,
  requestPersonalInfoSchema,
} = require('./Personal_info');
const {
  requestLanguagesSchema,
  responseLanguagesSchema,
} = require('./Languages');
const { statusCode401, statusCode200 } = require('./codes');
const code200 = statusCode200();
const { referencesSchema, requestReferencesSchema } = require('./References');
const { requestSkillsSchema, responseSkillsSchema } = require('./Skills');
const {
  requestExperienceSchema,
  responseExperienceSchema,
} = require('./Experience');
const {
  requestTechSkillsSchema,
  responseTechSkillsSchema,
} = require('./TechSkills');
const {
  requestUtilitiesSchema,
  responseUtilitiesSchema,
} = require('./Utilities');
const {
  requestAditionalsSchema,
  responseAditionalsSchema,
} = require('./Aditionals');
const {
  requestEducationSchema,
  responseEducationSchema,
  educationJoinSchema,
} = require('./Education');

module.exports = {
  responseUserSchema,
  requestUserSchema,
  modRequestUserSchema,
  jointUser,
  BearerAuth,
  personalInfoSchema,
  requestPersonalInfoSchema,
  requestLanguagesSchema,
  responseLanguagesSchema,
  referencesSchema,
  requestReferencesSchema,
  requestSkillsSchema,
  responseSkillsSchema,
  responseExperienceSchema,
  requestExperienceSchema,
  requestTechSkillsSchema,
  responseTechSkillsSchema,
  requestUtilitiesSchema,
  responseUtilitiesSchema,
  requestAditionalsSchema,
  responseAditionalsSchema,
  responseEducationSchema,
  requestEducationSchema,
  educationJoinSchema,
  statusCode200: code200,
  statusCode401,
};
