const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const { errorHandler } = require('./src/middlewares');
//expressvalidator = require('express-validator');

const routes = require('./routes')();
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(compression());

app.use('/', routes);
app.use(errorHandler.errorManagement);

module.exports = app;