var mongoose = require('mongoose')

var VillainSchema = new mongoose.Schema({
	villainName: String,
	realName: String,
	height: String,
	weight: Number,
	noteableFeature: String,
	origin: String
});

var villainModel = mongoose.model('Villain', VillainSchema);

module.exports = villainModel