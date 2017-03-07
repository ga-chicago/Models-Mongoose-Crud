//define mongoose collection
var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
	name: String,
	type: String,
	nativeTo: String,
	endangered: Boolean

});

module.exports = mongoose.model('Animal', AnimalSchema);