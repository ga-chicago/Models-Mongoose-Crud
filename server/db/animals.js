var mongoose = require('mongoose');
var mgconnected = 'mongodb://localhost/animal'

mongoose.connect(mgconnected);

mongoose.connection.on('connected', function(){
	console.log('connected to ' + mgconnected);
})

mongoose.connection.on('error', function (error){
	console.log('MongoDB error ' + error);
})

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected from ' + mgconnected);
})