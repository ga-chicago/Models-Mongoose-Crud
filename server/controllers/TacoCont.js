var express = require('express'),
	router = express.Router(),
	Taco = require('../models/Taco.js');




router.get('/', function(request, response){
	Taco.find(function(err, tacos){
		response.render('taco', {tacosArray: tacos});
	})
});

router.post('/', function(req, res){
	var taco = new Taco({
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
	taco.save(function(err){
		console.log(err);
	});
	res.redirect('/taco');
});

router.patch('/:id', function(req, res){
	var id = req.params.id,
		newInfo = req.body;

	taco.findById(id, function(err, taco){
		taco.protien = newInfo.protien,
		taco.shell = newInfo.shell,
		taco.inches = newInfo.inches,
		taco.salsa = newInfo.salsa,
		taco.rice = newInfo.rice,
		taco.beans = newInfo.beans,
		taco.fajitaVeg = newInfo.fajitaVeg,
		taco.cheese = newInfo.cheese,
		taco.cheeseType = newInfo.cheeseType,
		taco.comment = newInfo.comment

		taco.save();
		res.send('success');
	});
});

router.delete('/:id', function(req, res){
	var id = request.params.id;
	Taco.findById(id, function(err, taco){
		taco.remove();
		response.send('success');
	});
});



module.exports = router;