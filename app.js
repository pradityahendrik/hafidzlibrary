require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Routes for WEB
var indexRouter = require('./routes/web/index');

// Routes for API
var indexApiRouter = require('./routes/api/index');
var categoryApiRouter = require('./routes/api/categoryApi');
var packageApiRouter = require('./routes/api/packageApi');
var sliderApiRouter = require('./routes/api/sliderApi');
var transactionApiRouter = require('./routes/api/transactionApi');
var faqApiRouter = require('./routes/api/faqApi');
var userApiRouter = require('./routes/api/userApi');

/** passport authentication, jwt */
const passport = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'secret';
const userRepo = require('./repositories/userRepository');

var strategy = new JwtStrategy(jwtOptions, async(jwt_payload, next) => {
    const user = await userRepo.getUser(jwt_payload.username);
    if (user) {
      next(null, user);
    } else {
      next(null, false);
    }
}); 

passport.use(strategy);
/** done for passport authentication, jwt  */

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// WEB
app.use('/', indexRouter);

// API
app.use('/api', indexApiRouter);
app.use('/api/category', categoryApiRouter);
app.use('/api/package', packageApiRouter);
app.use('/api/slider', sliderApiRouter);
app.use('/api/transaction', transactionApiRouter);
app.use('/api/faq', faqApiRouter);
app.use('/api/user', userApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
