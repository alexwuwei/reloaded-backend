'use strict';

const mongoose = require('mongoose');

const growerSchema = new mongoose.Schema({
  growerName: String,
  growerPassword: String,
  address: String,
  flowers: [{type:mongoose.Schema.Types.ObjectId, ref: 'Flower'}],
  followers: Array,
  picture: Buffer,
  reviews: Number
});

module.exports = mongoose.model('Grower', growerSchema);
