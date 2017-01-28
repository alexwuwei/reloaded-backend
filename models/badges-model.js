'use strict';

const mongoose = require('mongoose');

const badgeSchema = new mongoose.Schema({
  badgeName: String,
  description: String,
  picture: Buffer
});

module.exports = mongoose.model('Badge', badgeSchema);
