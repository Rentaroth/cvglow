const jwt = require('jsonwebtoken');
const config = require('../../config');

const generateToken = (data) => {
  const info = {
    userName: data.user_name,
    password: data.password,
    eMail: data.e_mail,
  }
  const hashed = jwt.sign(info, config.auth.secret);
  return hashed;
}

module.exports = {
  generateToken,
};

