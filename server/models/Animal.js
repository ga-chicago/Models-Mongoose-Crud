var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
	name: String,
	type: String,
	aposableThumbs: Boolean
});

var animalModel = mongoose.model('Animal', AnimalSchema);
module.exports = animalModel;
