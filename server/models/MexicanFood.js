var mongoose = require('mongoose');

var MexicanSchema = new mongoose.Schema({
	type: String,
	sauce: String,
	side: String,

});

var foodModel = mongoose.model('MexicanFood', MexicanSchema);
module.exports = foodModel;