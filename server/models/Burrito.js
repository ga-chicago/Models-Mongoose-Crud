var mongoose = require('mongoose');

var BurritoSchema = new mongoose.Schema({
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

var burModel = mongoose.model('Burrito', BurritoSchema);

module.exports = burModel;