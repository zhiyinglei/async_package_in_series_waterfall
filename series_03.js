var async = require('async');

var fs = require("fs");
var path = require("path");


var dir = path.join(__dirname, "tmp");
var source = __filename;
var target = path.join(dir, "target");

var operations = [
	fs.mkdir.bind(fs, dir),
	fs.readFile.bind(fs, source),
	fs.writeFile.bind(fs, target)
];

async.waterfall(operations, done);

function done (err) {
	if (err) {
		handleError(err);
	}
	else{
		console.log("all done");
	}
}

function handleError(err){
	console.error(err);
}
