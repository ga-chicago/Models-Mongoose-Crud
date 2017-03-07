var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
	name: String,
	type: String,
	isCute: Boolean,
	ferocity: Number
});

var aniModel = mongoose.model('Animal', AnimalSchema);

module.exports = aniModel;
