var express		= require('express'),
	app			= express(),
	server		= require('http').createServer(app);
var path		= require('path');
var bodyParser	= require('body-parser');
var mongoose	= require('mongoose');
var Animal		= require('./models/Animal.js');

require('./db/db');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/furry', function(req, res) {
	var fuzzies = [];
	//Animal.find().forEach(function(animals) {
	Animal.forEach(function(animals) {
		//res.json(animals);
		//res.render('home', {animalInfo: animals});

		fuzzies.push(animals);
	})

	res.render('home', {animalInfo: fuzzies});
})

app.post('/furry', function(req, res) {
	var name		=	req.body.name,
		legs		=	req.body.legs,
		countries	=	req.body.countries,
		fast		=	req.body.fast;

	var animalistic = new Animal({name: name, legs: legs, countries: countries, fast: fast});
	animalistic.save();
	res.send('Success with the POST on the furry');
})

app.patch('/furry', function(req, res) {
	var id 			= 	req.body.id,
		name		=	req.body.name,
		legs		=	req.body.legs,
		countries	=	req.body.countries,
		fast		=	req.body.fast;

	Animal.findById(id, function(err, animal) {
		Animal.findById(id, function(err, animal) {
			if (name != "") {
				animal.name = name;
			};
			if (legs != "") {
				animal.legs = legs;
			}
			if (countries != "") {
				animal.countries = countries;
			}
			if (fast != "") {
				animal.fast = fast;
			}
		})

		animal.save();
	})
	
	res.send('Success with the PATCH on the furry');
})

app.delete('/furry', function(req, res) {
	var id = req.body.id;

	Animal.findById(id, function(err, animal) {
		animal.remove();
	})

	res.send('Success with the DELETE on the furry');
})

server.listen(3000, function() {
	console.log('yup, listening on port 3000');
})