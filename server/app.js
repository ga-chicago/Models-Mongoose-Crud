var express = require('express'),
	app		= express(),
	server	= require('http').createServer(app),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	Animal = require('./models/Animal.js');
require('./db/db');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/animals', function(request, response){
	Animal.find(function(err, animals){
		response.json(animals);
	})
})


app.post('/animals', function(request, response){
	var name = request.body.name;
	var type = request.body.type;
	var isCute = request.body.isCute;
	var ferocity = request.body.ferocity;
	var animal = new Animal({name: name, type: type, isCute: isCute, ferocity: ferocity});
	animal.save();
	response.send("animal saved successfully");
})


app.patch('/animals', function(request, response){
	response.send("success from patch");
})


app.delete('/animals', function(request, response){
	response.send("success from delete")
})


server.listen(3000, function(){
	console.log("server listening at 3000");
})
