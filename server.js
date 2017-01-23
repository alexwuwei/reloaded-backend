'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const DB_PORT = process.env.MONGOLAB_URI || 'mongodb://localhost/db';
mongoose.connect(DB_PORT);

let publicRouter = express.Router();
let apiRouter = express.Router();
let loginRouter = express.Router();

require('./routes/flowers-routes')(apiRouter);
require('./routes/growers-routes')(apiRouter);
require('./routes/sellers-routes')(apiRouter);
require('./routes/badges-routes')(apiRouter);

require('./routes/events-routes')(apiRouter);
require('./routes/users-routes')(loginRouter);
require('./routes/login-routes')(apiRouter);

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('backend server started on 3000');
})
