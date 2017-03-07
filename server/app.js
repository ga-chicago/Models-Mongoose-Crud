var express = require('express');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MexicanFood = require('./models/MexicanFood.js');

require('./db/db');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/yummy', function(request, response){
	MexicanFood.find(function(err, food){
		response.json(food);

	});
});

app.post('/yummy', function(request, resonse){
	var type = request.body.type;
	var sauce = request.body.sauce;
	var side = request.body.side;

	var fiesta = new MexicanFood ({type: type, sauce: sauce, side: side});
	fiest.save();
	response.send("success");
});

app.patch('/yummy', function(request, response){
	var id = request.body.id;

	MexicanFood.findById(id, function(err, food){
		food.save();
		response.send('success');
	})
});

app.delete('/yummy', function(request, response){
	var id = request.body.id;

	MexicanFood.findById(id, function(err, food){
		food.remove();
		response.send('success')
	})
})













server.listen(3000, function(){
	console.log('listening');
})
