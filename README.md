# async_package_in_series_waterfall

npm install saync

node series_01.js 

node series_02.js

node series_03.js



Explanation:

series_01.js, using async.series([mkdir, read, write], done);


series_02.js, using async.waterfall([mkdir, read, write], done);


series_03.js : 

var operations = [
	fs.mkdir.bind(fs, dir),
	fs.readFile.bind(fs, source),
	fs.writeFile.bind(fs, target)
];

async.waterfall(operations, done);

