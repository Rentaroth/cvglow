const { statusCode200 } = require('./200_swagger.schema');
const { statusCode401 } = require('./401_swagger.schema');
const { statusCode404 } = require('./404_swagger.schema');

module.exports = {
  statusCode200,
  statusCode401,
  statusCode404,
}