const path = require('path');
const config = require('./src/config');

const DBdir = path.join(__dirname, 'src', 'database');
const DBMigDir = path.join(__dirname, 'src', 'database', 'mig');
const DBSeedDir = path.join(__dirname, 'src', 'database', 'seed');

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
      directory: DBMigDir,
    },
    seeds: {
      directory: DBSeedDir,
    },
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
  },
};

module.exports =
  process.env.NODE_ENV === 'development'
    ? connection.development
    : connection.testing;
