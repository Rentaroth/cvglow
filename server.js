const express = require('express');
const bodyParser = require('body-parser');
cors = require('cors');
compression = require('compression');
//expressvalidator = require('express-validator');

const routes = require('./routes')();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(compression());

app.use('/', routes);


module.exports = app;