var express = require('express'),
	router = express.Router(),
	Burrito = require('../models/Burrito.js');

router.get('/', function(req, res){
	Taco.find(function(err, burrito){
		res.render('burrito', {burritoArray: burritos});
	})
});

// router.post('/', function(req,res){

// })


