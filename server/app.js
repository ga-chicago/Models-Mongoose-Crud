var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var zooAnimals = require('./models/Animals.js')

require('./db/db');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/animals', function(req, res){
  zooAnimals.find(function(err, animals){
    res.json(animals)
    console.log('successful get')
  });
});

app.post('/animals', function(req, res){
  var name = req.body.name;
  var animalType = req.body.animalType;
  var species = req.body.species;
  var alive = req.body.alive;
  var age = req.body.age;

  var animalOne = new zooAnimals ({name: name, animalType: animalType, species: species, alive: alive, age: age});
  animalOne.save();
  res.send('successful post!');
  console.log('successful post')
});

app.patch('/animals', function(req, res){
  var id = req.body.id;
  var name = req.body.name;
  var age  = req.body.age;
  var alive = req.body.alive;
  var animalType = req.body.animalType;
  var species = req.body.species;

  zooAnimals.findById(id, function(err, animals){
    animals.name = name;
    animals.alive = alive;
    animals.save();
    res.send('successful patch');
    console.log('successful patch');
  });
});

app.put('/animals/:id', function(req, res){
  console.log(req.params.id)
  var name = req.body.name;
  zooAnimals.findByIdAndUpdate(req.params.id, req.body, function(err, animals){
    res.json(animals);
  });
});

app.delete('/animals', function(req, res){
  var id = req.body.id;
  var name = req.body.name;
  var age  = req.body.age;
  var alive = req.body.alive;
  var animalType = req.body.animalType;
  var species = req.body.species;

  zooAnimals.findById(id, function(err, animals){
    animals.remove();
    res.send('successful delete!');
    console.log('successful delete');
  });
});

server.listen(3000, function(){
  console.log('we are on 3000')
});
