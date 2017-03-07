var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	Villain = require('./models/Villain.js');

require('./db/db.js')

app.use(bodyParser.urlencoded({extended: true}));

app.get('/villains', function(req, res){
	Villain.find(function(err, villain){
		res.json(villain)
	})
})

app.post('/villains', function(req, res){
	var villainName = req.body.villainName
	var	realName = req.body.realName
	var	height = req.body.height
	var	weight = req.body.weight
	var	noteableFeature = req.body.noteableFeature
	var	origin = req.body.origin

		var villainInput = new Villain({villainName: villainName, realName: realName, height: height, weight: weight,
		noteableFeature: noteableFeature, origin: origin});
		villainInput.save();
		res.send('success')
})

app.patch('/villains', function(req, res){
	res.send('success patch')
})

app.delete('/villains', function(req, res){
	var id = req.body.id;
	Villain.findById(id, function(err, villain){
		villain.remove();
		res.send('success')
	})


})



server.listen(3000, function(){
	console.log('Holy port 3000 Batman!')
})