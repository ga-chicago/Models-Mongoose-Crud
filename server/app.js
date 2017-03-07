var express = require('express');
app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Animal = require('./model/Animal.js');

require('./db/animals');

app.use(bodyParser.urlencoded({extended: true})); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.get('/animals', function(req, res, next){		//get listener
	Animal.find(function(err, animals){				
		res.json(animals);							//get response
	});
	console.log('get animals')
})

app.post('/animals', function(req, res){			//post listener
	var name = req.body.name;						//post vars
	var type = req.body.type;
	var nativeTo =  req.body.nativeTo;
	var endangered = req.body.endangered;
													//request to post a new array
	var zoopet = new Animal({name: name, type: type, nativeTo: nativeTo, endangered: endangered});
	zoopet.save();
	res.send('zoopet entered')						

	console.log('successful post')
	res.send('posted')								//post response

})

app.patch('/animals', function(req, res){			//patch listener
	var id = req.body.id;							//patch vars - how am I indexing
	var endangered = req.body.endangered;			//& what am I patching

	Animal.findById(id, function(err, animal){		//patch request
		Animal.endangered = endangered;
		animal.save();
		res.send('animal patched')					//patch response

	})
})

app.delete('/animals', function(req, res){			//delete listener
	var id = req.body.id;							

	Animal.findById(id, function(err, animal){		//find animal by id
		animal.remove();							//delete request
		animal.save();
		res.send('animal deleted')					//response request
	})
})
//render form for mongoose
app.get('/animal', function(req, res){
	res.render('animal');
})
//post to mongoose server
app.post('/animal', function(req, res){
	res.json(req.body);
})

server.listen(3000, function(){
	console.log('Ears up on 3000!')
})



