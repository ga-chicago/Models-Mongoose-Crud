var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
	name: String,
	legs: Number,
	countries: Array,
	fast: Boolean
});

module.exports = mongoose.model('Animal', AnimalSchema);