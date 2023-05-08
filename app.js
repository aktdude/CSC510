// var createError = require('http-errors');
var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// const sqlite3 = require('sqlite3').verbose();

var glob = require('glob');
var cors = require('cors');


var enrollmentsRouter = require('./routes/enrollments');
var coursesRouter = require('./routes/courses');
//var assignmentsRouter = require('./routes/assignments');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
// var courseDetailsRouter = require('./routes/course-details');

var app = express();

app.use(cors());
// Define the JSON parser as a default way
// to consume and produce data through the
// exposed APIs
app.use(bodyParser.json());

// The `ng build` command will save the result
// under the `dist` folder.

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

//app.get("/", (req, res) => res.render("pages/index"));

// app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/dashboard', usersRouter);
// app.use('/course-details', courseDetailsRouter);
// app.use('/', indexRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/enrollments', enrollmentsRouter);
//app.use('/api/assignments', assignmentsRouter);
app.use('/api/users', usersRouter);
app.use('/api/admin', adminRouter);
// app.use('/course-details', courseDetailsRouter);

// app.use('/api', api); // redirect API calls
// app.use('/', express.static(__dirname + '/www')); // redirect root
// app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
// app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
// app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });
//
// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('pages/error');
// });

// var server = app.listen(process.env.PORT || 8080, function () {
//
//     var port = server.address().port;
//     console.log("App now running on port ", port);
//
// });

// glob.sync( './routes/**/*.js' ).forEach( function( file ) {
//     require( file );
// });


//app.use('/api', router);
// app.get("/api/status", function (req, res) {
//     res.status(200).json({ status: "UP" });
// });

module.exports = app;
