var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const PORT = process.env.PORT || 3001;

var apiRouter = require('./routes/api');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// TODO: put react app here
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/', apiRouter);

app.listen(PORT, () => console.log(`listening on ${PORT}`))

module.exports = app;
