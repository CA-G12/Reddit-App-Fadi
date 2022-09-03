const { join } = require('path');

const compression = require('compression');
const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./routers');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));
app.use('/api/v1', router);

module.exports = app;
