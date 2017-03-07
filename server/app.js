var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Animal = require('./models/Animal.js');

require('./db/db.js');

app.use(bodyParser.urlencoded( {
  extended: true
}));

app.get('/animals', function(request, response) {
  Animal.find(function(error, animals) {
    response.json(animals);
  });
  // console.log("get to animals");
  // response.send("Success with Get");
});

app.post('/animals', function(request, response) {
  var name = request.body.name;
  var type = request.body.type;
  var age = request.body.age;

  var critter = new Animal({name: name, type: type, age: age});
  critter.save();
  response.send("Success with Post");
});

app.patch('/animals', function(request, response) {
  var id = request.body.id;
  var age = request.body.age;

  Animal.findById(id, function(error, animal) {
    animal.age = age;
    animal.save();
    response.send("Success with Patch");
  });
});

app.put('/animals', function(request, response) {
  var id = request.body.id;
  var age = request.body.age;

  Animal.findById(id, function(error, animal) {
    animal.age = age;
    animal.save();
    response.send("Success with Put");
  });
});

app.delete('/animals', function(request, response) {
  var id = request.body.id;

  Animal.findById(id, function(error, animal) {
    animal.remove();
    response.send("Success with Delete");
  });
});



server.listen(3000, function() {
  console.log("server is listening on port 3000");
});
