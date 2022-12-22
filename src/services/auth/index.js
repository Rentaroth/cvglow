const jwt = require('jsonwebtoken');
const config = require('../../config');

const generateToken = async (data) => {
  const info = {
    id: data.id,
    userName: data.user_name,
    eMail: data.e_mail,
    personId: data.person_id,
  }
  const hashed = await jwt.sign(info, config.auth.secret, { expiresIn: '3h' });
  return hashed;
}
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if(!token) {
      const error = new Error();
      error.status = 401;
      error.user = { message: 'Not Authorized!' };
      throw error;
    }
    const verification = decodeToken(token);
    if(!verification) {
      const error = new Error();
      error.status = 401;
      error.user = 'Not Authorized!';
      throw error;
    }
    req.aproved = verification;
    return next();
  } catch (error) {
    next(error);
  }
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

