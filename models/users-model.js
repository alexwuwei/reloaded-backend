'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  location: String,
  gender: String,
  website: String,
  memberSince: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', userSchema);
