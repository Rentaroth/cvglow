const jwt = require('jsonwebtoken');
const config = require('../../config');
const BaseRepository = require('../../repositories/baseRepository');

const generateToken = async (data) => {
  const info = {
    id: data.id,
    userName: data.user_name,
    eMail: data.e_mail,
    personId: data.person_id,
    isAdmin: data.is_admin === 1 ? true : false,
  }
  const hashed = await jwt.sign(info, config.auth.secret, { expiresIn: '24h' });
  return hashed;
}
const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { id } = req.params;
    let { baseUrl } = req;
    console.log(baseUrl);
    if(baseUrl === '/personalInfo') {
      baseUrl = 'Personal_info';
    } else if(baseUrl === '/techSkills') {
      baseUrl = 'Tech_skills';
    }
    let table = baseUrl.replace('/', '');
    table = table[0].toUpperCase() + table.replace(table[0], '');
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
      error.user = { message: 'Not Authorized!' };
      throw error;
    }
    const pass = await confirmIdentity(table, id, verification);
    if(!pass) {
      const error = new Error();
      error.status = 401;
      error.user = { message: 'Not Authorized!' };
      throw error;
    }
    req.aproved = verification;
    return next();
  } catch (error) {
    next(error);
  }
}

const confirmIdentity = async (table, id, token) => {
  if(!token.isAdmin) {
    const base = new BaseRepository(table);
    const result = await base.checkIdentity(id, token);
    return result;
  }
  return true;
}

const decodeToken = (token) => {
  const preparedToken = token.replace('Bearer ', '');
  try {
    const data = jwt.verify(preparedToken, config.auth.secret);
    return data;
  } catch (error) {
    error.user = { message: 'Not authorized for this action!' };
    error.status = 401;
    throw error;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};

