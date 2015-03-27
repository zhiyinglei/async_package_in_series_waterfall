var async = require('async');

var fs = require("fs");
var path = require("path");


var dir = path.join(__dirname, "tmp");
var source = __filename;
var target = path.join(dir, "target");

var fileContent;

async.series([mkdir, read, write], done);

function mkdir(cb){
	fs.mkdir(dir, cb)
}

function read(cb){
	fs.readFile(source, function(err, content){
		if (err){
			cb(err);
		}
		else{
			fileContent = content;
			cb();
		}
	});
}

function write(cb){
	fs.writeFile(target, fileContent, cb);
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
