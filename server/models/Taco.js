var mongoose = require('mongoose');

var TacoSchema = new mongoose.Schema({
	protien: {type: String, required: true},
	shell: String,
	inches: Number,
	salsa: String,
	rice: Boolean,
	beans: Boolean,
	fajitaVeg: Boolean,
	cheese: Boolean,
	cheeseType: String,
	comment: String
}, {strict: false});

var tacoModel = mongoose.model('hero', TacoSchema);

module.exports = tacoModel;