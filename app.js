var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
require('./db/animalz');
var animal = require('./model/animal.js');

app.use(bodyParser.urlencoded({extended: true}));

require('./db/animalz.js');

app.get('/Animal', function(request, response){
	Animal.find(function(error, animals){
		//assuming there is no error
		response.json(animals);
	});
});

//new animals//
app.post('/Animal', function(request, response){
	var name = request.body.name;
	var type = request.body.type;
	var dangerous = request.body.dangerous;
	var animaly = new Animal({name: name, type: type, dangerous: dangerous});
	animaly.save(); //saves to the database!!!
	response.send("success");
})

app.patch('/Animal', function(request, response){
	var id = request.body.id;
	var dangerous = request.body.dangerous;

	Animal.findById(id, function(error, animal){ //define, change, save!
		animal.dangerous = dangerous;
		animal.save();
		response.send("success");
	})
})

app.delete('/Animal', function(request, response){
	var id = request.body.id;

	Animal.findById(id, function (error, animal){
		Animal.remove();
		response.send("success");
	})
})


app.post('/Animal', function(request, response){
	console.log('post to Animal');
	response.send("success");
});

app.patch('/Animal', function(request, response){
	console.log('patch to Animal');
	response.send("success with patch");
});
app.delete('/Animal', function(request, response){
	console.log('delete to Animal');
	response.send("delete to Animal");
})


server.listen(3000, function(){
	console.log("listening on port 3000");
})
