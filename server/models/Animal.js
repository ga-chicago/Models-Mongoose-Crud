var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
	species: String,
	color: String,
	domestic: Boolean, 
	age: Number 

});



var animalModel = mongoose.model('Animal', AnimalSchema);
module.exports = animalModel
