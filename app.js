const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorHandler = require('./utils/errorHandler');
const app = express();

//Routers
const apiRouter = require('./routes/apiRoutes');

//tell express where to find the views + set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//logging
app.use(morgan('dev'));

//cors
app.use(cors());

//parse body and add it to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//parse cookie header and add them to req.cookies
app.use(cookieParser());

//serve static files
app.use(express.static(path.join(__dirname, 'public')));

//Router middleware
app.use('/api', apiRouter);

//Error handler
app.use(errorHandler);

module.exports = app;
