const jwt = require('jsonwebtoken');
const config = require('../../config');

const generateToken = async (data) => {
  const info = {
    userName: data.user_name,
    eMail: data.e_mail,
  }
  const hashed = await jwt.sign(info, config.auth.secret, { expiresIn: '20s' });
  return hashed;
}
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const verification = decodeToken(token);
  if(!verification) {
    throw new Error('Not Authorized!');
  }
  req.aproved = verification;
  return next();
}

const decodeToken = (token) => {
  const preparedToken = token.replace('Bearer ', '');
  const data = jwt.verify(preparedToken, config.auth.secret);
  return data;
}

module.exports = {
  generateToken,
  verifyToken,
};

