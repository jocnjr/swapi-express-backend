const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const logger = require('morgan');
const path = require('path');
const siteRoutes = require('./routes/index');
const PORT = 8000;

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// routes

app.use('/', siteRoutes);

app.locals.title = 'Ironhack SWAPI backend';

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});

module.exports = app;