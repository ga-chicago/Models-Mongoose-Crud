var express    = require('express');
var app		   = express();
var path 	   = require('path')
var server     = require('http').createServer(app);
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var Animal     = require('./models/Animal.js');
require('./db/db.js');


app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/animals', function(req, res){
	Animal.find(function(err, animals){
		// res.json(animals);
		res.render('animals');
	});
});

app.post('/animals', function(req, res){
	var name 	= req.body.name;
	var classes = req.body.class;
	var habitat = req.body.habitat;
	var diet 	= req.body.diet;
	var extinct = req.body.extinct;

	var animalSpirit = new Animal({name: name, class: classes, habitat: habitat, diet: diet, extinct: extinct});
	animalSpirit.save();
	res.send("animal spirits");
});

app.patch('/animals', function(req, res){
	var id = req.body.id;
	var extinct = req.body.extinct;

	Animal.findById(id, function(err, animals){
		animals.extinct = extinct;
		animals.save();
		res.send('~~Jurassic Park theme~~');
	});
});

app.put('/animals', function(req, res){
	//used to replace a resource? which is?
});

app.delete('/animals', function(req, res){
	var id = req.body.id;

	Animal.findById(id, function(err, animals){
		animals.remove();
		res.send('they gone')
	})
})


server.listen(3000, function(){
	console.log("yo it's andre port 3000")
})
