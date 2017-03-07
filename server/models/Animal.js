var mongoose = require('mongoose');

var KittySchema = new mongoose.Schema({
	name: String,
	breed: String,
	isGoodKitty: Boolean,

});

var kittyModel = mongoose.model('Kitty', KittySchema);
module.exports = kittyModel;