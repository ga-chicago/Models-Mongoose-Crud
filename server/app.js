var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Kitty = require('./models/Animal.js');

require('./db/db');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/kitties', function(request, response){
	console.log("success");
	Kitty.find(function(err, kitties){
		response.json(kitties);

	});
});

app.post('/kitties', function(request, response){
	var name = request.body.name;
	var breed = request.body.breed;
	var isGoodKitty = request.body.isGoodKitty;

	var kitten = new Kitty({name: name, breed: breed, isGoodKitty: isGoodKitty});
	kitten.save();
	response.send("success");
});

app.patch('/kitties', function(request, response){
	var id = request.body.id;
	var isGoodKitty = require.body.isGoodKitty;

	Kitty.findById(id, function(err, kitty){
		kitty.isGoodKitty = isGoodKitty;
		kitty.save();
		response.send('success');
	})
});

app.delete('/kitties', function(request, response){
	var id = request.body.id;

	Kitty.findById(id, function(err, kitty){
		kitty.remove();
		response.send('success')
	})
})













server.listen(3000, function(){
	console.log('listening');
})
