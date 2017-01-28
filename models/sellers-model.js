'use strict';

const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  sellerName: String,
  sellerPassword: String,
  address: String,
  followers: Array,
  reviews: String

});

module.exports = mongoose.model('Seller', sellerSchema);
