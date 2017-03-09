//-----------------------------------------------------------------------------------------------------------\\
var express = require('express'),
	app     = express(),
	server  = require('http').createServer(app),
	path    = require('path');
	bodyParser = require('body-parser'),
	Animal = require('./models/Animal.js'),
	mongoose = require('mongoose');

require('./db/db.js');

app.use(bodyParser.urlencoded({
	extended: true
}));

//-----------------------------------------------------------------------------------------------------------\\

app.get('/animals', function(req, res){
	Animal.find(function(err, farm){
		res.json(farm);
	})
})

app.post('/animals', function(req, res){
	console.log(req.body)
	var name = req.body.name;
	var type = req.body.type;
	var aposableThumbs = req.body.aposableThumbs;
	var animal = new Animal({name: name, type: type, aposableThumbs: aposableThumbs})// this line is creating a new instance of the Dog model.  The Model is like a 
	//layout of the json objects within a DB
	animal.save();
	res.send("new animal");

})

app.patch('/animals', function(req, res){
	var id = req.body.id;
	var aposableThumbs = req.body.aposableThumbs;
	Dog.findById(id, function(err, farm){
		farm.aposableThumbs = aposableThumbs;
		farm.save();
		res.send("weedid it")
	})
})

app.delete('/animals', function(req, res){
	console.log("animals:DELETE completed")
	res.send("animals:DELETE completed")
})

//-----------------------------------------------------------------------------------------------------------\\
server.listen(3000, function(){
	console.log("we aint playin shit no more, we aint doin it. im tellin yah")
})