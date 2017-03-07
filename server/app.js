var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	Animal = require('./models/Animal');

require('./db/db');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function (req, res) {
	Animal.find(function (err, animals) {
		res.json(animals);
	});
});

app.post('/', function (req, res) {
	var name = req.body.name,
		legs = req.body.legs,
		a1 = new Animal({name: name, legs, legs});
	a1.save();
	res.send("posted");
});

app.patch('/', function (req, res) {
	var id = req.body.id,
		legs = req.body.legs;
	Animal.findById(id, function (err, animal) {
		animal.legs = legs;
		animal.save();
		res.send("patched");
	});
});

app.delete('/', function (req, res) {
	var id = req.body.id;
	Animal.findById(id, function (err, animal) {
		animal.remove();
		res.send("deleted");
	});
});

server.listen(3000, function () {
	console.log("Listening on port 3000");
});