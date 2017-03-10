var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	bodyParser = require('body-parser'),
	path = require('path'),
	mongoose = require('mongoose');

require('./db/db');

var TacoCont = require('./controllers/TacoCont'),
	BurritoCont = require('./controllers/BurritoCont');

app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/taco', TacoCont);
app.use('/burrito', BurritoCont);



server.listen(3000, function(){
	console.log('WE HEAR YOU MASTER ON 3000');
});