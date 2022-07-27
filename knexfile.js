const path = require('path');
const config = require('./src/config');

const DBdir = path.join(__dirname, 'src', 'database');

const connection = {
  development: {
    client: 'mysql2',
    connection: {
      user: config.database.user,
      password: config.database.password,
      database: config.database.name,
      host: config.database.host,
    },
    migrations: {
      directory: DBdir,
    },
    seeds: {
      directory: DBdir,
    }
  },
  testing: {
    client: 'mysql',
    connection: 'database url',
  },
  migrations: {
    directory: DBdir,
  },
  seeds: {
    directory: DBdir,
  }
};

module.exports = process.env.NODE_ENV === development ? connection.development : connection.testing;