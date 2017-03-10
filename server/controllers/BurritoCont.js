var express = require('express'),
	router = express.Router(),
	Burrito = require('../models/Burrito.js');

router.get('/', function(req, res){
	Burrito.find(function(err, ritos){
		res.render('burrito', {burritoArray: ritos});
	})
});

router.post('/', function(req, res){
	var burrito = new Burrito({
	protien: req.body.protien,
	shell: req.body.shell,
	inches: req.body.inches,
	salsa: req.body.salsa,
	rice: req.body.rice,
	beans: req.body.beans,
	fajitaVeg: req.body.fajitaVeg,
	cheese: req.body.cheese,
	cheeseType: req.body.cheeseType,
	comment: req.body.comment
	});
	burrito.save(function(err){
		console.log(err);
	});
	res.redirect('/burrito');
});

router.patch('/:id', function(req, res){
	var id = req.params.id,
		newInfo = req.body;

	Burrito.findById(id, function(err, burrito){
		burrito.protien = newInfo.protien,
		burrito.shell = newInfo.shell,
		burrito.inches = newInfo.inches,
		burrito.salsa = newInfo.salsa,
		burrito.rice = newInfo.rice,
		burrito.beans = newInfo.beans,
		burrito.fajitaVeg = newInfo.fajitaVeg,
		burrito.cheese = newInfo.cheese,
		burrito.cheeseType = newInfo.cheeseType,
		burrito.comment = newInfo.comment

		burrito.save();
		res.send('success');
	});
});

router.delete('/:id', function(req, res){
	var id = request.params.id;
	Burrito.findById(id, function(err, rito){
		rito.remove();
		response.send('success');
	});
});



module.exports = router;