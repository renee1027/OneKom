var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var liveStream = require('./routes/liveStream');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// views
app.use('/', index);
app.use('/liveStream', liveStream);
//app.use('/profile', profile);

// public
app.use('/public',express.static(path.join(__dirname, '/public')));
app.use('/images',express.static(path.join(__dirname, '/public/images')));
app.use('/vendor',express.static(path.join(__dirname, '/public/vendor')));
app.use('/fonts',express.static(path.join(__dirname, '/public/fonts')));
app.use('/font-awesome',express.static(path.join(__dirname, '/public/fonts/font-awesome-4.7.0')));
app.use('/css',express.static(path.join(__dirname, '/public/stylesheets')));
app.use('/custom',express.static(path.join(__dirname, '/public/javascripts/custom')));
app.use('/lib',express.static(path.join(__dirname, '/public/javascripts/lib')));
app.use('/plugins',express.static(path.join(__dirname, '/public/javascripts/plugins')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
