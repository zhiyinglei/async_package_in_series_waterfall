var async = require('async');

var fs = require("fs");
var path = require("path");


var dir = path.join(__dirname, "tmp");
var source = __filename;
var target = path.join(dir, "target");



async.waterfall([mkdir, read, write], done);

function mkdir(cb){
	fs.mkdir(dir, cb)
}

function read(cb){
	fs.readFile(source, cb);
}

function write(content, cb){
	fs.writeFile(target, content, cb);
}


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
