const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log('backend server started on 3000');
})
