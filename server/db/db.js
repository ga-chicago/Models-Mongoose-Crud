var mongoose = require('mongoose'),
	conStr = 'mongodb://localhost/animals';

mongoose.connect(conStr);
mongoose.connection.on('connected', function () {
	console.log("connected to " + conStr);
});
mongoose.connection.on('error', function (err) {
	console.log("MongoDB error " + err);
});
mongoose.connection.on('disconnected', function () {
	console.log("mongoose disconnected from " + conStr);
});