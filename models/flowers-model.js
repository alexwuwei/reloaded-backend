'use strict';

const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
  name: String,
  strain: String,
  teaedgesee: Number,
  seabeedee: Number,
  grower: [{type:mongoose.Schema.Types.ObjectId, ref: 'Grower'}],
  sellers: [{type:mongoose.Schema.Types.ObjectId, ref: 'Seller'}],
  picture: Buffer,
  //TODO: reviews
  reviews: Number

});

module.exports = mongoose.model('Flower', flowerSchema);
