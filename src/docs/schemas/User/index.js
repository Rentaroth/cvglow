const { requestUserSchema } = require('./request_user_swagger.schema');
const { responseUserSchema } = require('./user_swagger.schema');
const { jointUser } = require('./joint_user_swagger.schema');

module.exports = {
  requestUserSchema,
  responseUserSchema,
  jointUser,
}