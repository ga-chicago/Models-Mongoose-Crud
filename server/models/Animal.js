var mongoose = require('mongoose');

var AnimalSchema = new mongoose.Schema({
	name: String,
	class: String,
	habitat: String,
	diet: String,
	extinct: Boolean

})

module.exports = mongoose.model('Animal', AnimalSchema);