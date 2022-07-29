var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const jugadoresRouter = require('./routes/jugadores')
const apiRouter = require('./routes/starwarsapi')

const { dbConnection } = require('./database/db');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/plantel', jugadoresRouter)
app.use('/starwars',apiRouter)
dbConnection()


module.exports = app;
