 'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  year: Number,
  make: String,
  model: String,
  picture: String,
  movie: Array
});

// MODEL
const Car = mongoose.model('Car', CarSchema);

// EXPORT
module.exports = Car;