var express = require('express');
var path = require('path')
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Animal = require('./models/Animal.js'); 

require('./db/db.js'); 

app.use(bodyParser.urlencoded({extended: true})); 


app.get('/animalFriends', function(req, res){
	Animal.find(function(err, animals){
		res.json(animals);
	})
}),

app.post('/animalFriends', function(req, res){
	var species  = req.body.species;
	var color 	 = req.body.color;
	var domestic = req.body.domestic;
	var age		 = req.body.age;

	var furry = new Animal ({species: species, color: color, domestic: domestic, age: age}); 
	furry.save(); 
	res.send("Success"); 
}); 

app.patch('/animalFriends', function(req, res){
	var id = req.body.id;
	var domesticated = domestic; 

	Animal.findById(id, function(err, animals){
		domesticated = domestic; 
		animals.save(); 
		res.send("Success");
	})
});

app.delete('/animalFriends', function(req, res){
	var id = req.body.id; 

	Animal.findById(id, function(err, dog){
		animals.remove(); 
		res.send("success");
	})
});






// species: "coyote",
// 	color: "grey",
// 	domestic: false,
// 	age: 5


server.listen(3000, function(){
	console.log("port 3000 is connected"); 
})