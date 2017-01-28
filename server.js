'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const badges = require(__dirname + '/models/badges-model');
const checkins = require(__dirname + '/models/checkins-model');
const flowers = require(__dirname + '/models/flowers-model');
const growers = require(__dirname + '/models/growers-model');
const sellers = require(__dirname + '/models/sellers-model');
const users = require(__dirname + '/models/users-model');

const DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);
app.use(bodyParser.json());

let publicRouter = express.Router();
let apiRouter = express.Router();
let loginRouter = express.Router();

require('./routes/flowers-routes')(apiRouter);
require('./routes/growers-routes')(apiRouter);
require('./routes/sellers-routes')(apiRouter);
require('./routes/badges-routes')(apiRouter);
require('./routes/checkins-routes')(apiRouter);
// require('./routes/users-routes')(loginRouter);
// require('./routes/login-routes')(apiRouter);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

app.use('/api', apiRouter);
app.use('/public', publicRouter);
app.use('/login', loginRouter);

app.listen(3000, () => {
  console.log('backend server started on 3000');
});
