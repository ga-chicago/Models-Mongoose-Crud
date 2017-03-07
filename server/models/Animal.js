var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
  name: String,
  type: String,
  age: Number,
});

var animalModel = mongoose.model('Animal', AnimalSchema);
module.exports = animalModel;
