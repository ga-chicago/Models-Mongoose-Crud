var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
  name: String,
  animalType: String,
  species: String,
  alive: Boolean,
  age: Number
});

var animalModel = mongoose.model('zooAnimals', AnimalSchema);

module.exports = animalModel;
