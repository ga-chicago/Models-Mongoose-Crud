var mongoose = require('mongoose');
var AnimalSchema = new mongoose.Schema({
	name: String,
	legs: Number
});
module.exports = mongoose.model('Animal', AnimalSchema);