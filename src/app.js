const { join } = require('path');

const compression = require('compression');
const express = require('express');
const cookieParser = require('cookie-parser');

const router = require('./routers');
const routing = require('./routers/routing');
const notFoundError = require('./errors/notFoundError');
const handleErrors = require('./errors/handleError');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(compression());
app.use(express.static(join(__dirname, '..', 'public')));
app.use('/pages/', routing);
app.use('/api/v1', router);

app.use(notFoundError);
app.use(handleErrors);
module.exports = app;
