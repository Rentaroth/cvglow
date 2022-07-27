const config = require('dotenv').config();

module.exports = {
  api: {
    port: process.env.SERVER_PORT || 3010,
  },
  database: {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
  },
};
