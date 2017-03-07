var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var mongoose = require('mongoose');
var ZooAnimals = require('./models/Animals.js')

require('./db/db');

app.use(bodyParser.urlencoded({extended:true}));

app.get('/animals', function(req, res){
  ZooAnimals.find(function(err, animals){
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

  var animalOne = new ZooAnimals ({name: name, animalType: animalType, species: species, alive: alive, age: age});
  animalOne.save();
  res.send('successful post!');
  console.log('successful post')
});

app.patch('/animals', function(req, res){
  var id = req.body.id;
  var name = req.body.name;
  var age  = req.body.age;
  var alive = req.body.alive;
  ZooAnimals.findById(id, function(err, animals){
    ZooAnimals.alive = alive;
    ZooAnimals.save();
    res.send('successful patch');
    console.log('successful patch');
  });
});

app.delete('/animals', function(req, res){
  var id = req.body.id;
  
  ZooAnimals.findById(id, function(err, animals){
    ZooAnimals.remove();
    res.send('successful delete!');
    console.log('successful delete');
  });
});

server.listen(3000, function(){
  console.log('we are on 3000')
});
