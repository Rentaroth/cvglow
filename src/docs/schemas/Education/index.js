const { requestEducationSchema } = require('./request_education_swagger.schema');
const { responseEducationSchema} = require('./response_education_swagger.schema');
const { educationJoinSchema } = require('./education_joint_swagger.schema');

module.exports = {
  requestEducationSchema,
  responseEducationSchema,
  educationJoinSchema,
}