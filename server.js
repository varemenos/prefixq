'use strict';

var address = { host: '127.0.0.1', port: 3001 };

var fn = require('./fn');
var routes = require('./routes');

if(process.argv.length <= 2){
	// Via HTTP
	var express = require('express');

	var app = express();

	app.configure(function () {
		app.use(express.logger('dev'));
		app.use(express.json());
		app.use(express.urlencoded());
	});

	app.get('/', routes.index);
	// app.get('/', func); Use this to return a webapp to get the user to select which properties he wants prefixed
	// app.get('/api/v1', func); Docs
	app.listen(address.port);

	console.log('Server running at ' + address.host + ':' + address.port);
	// var properties = fn.getCssProperties(); get all CSS properties
} else {
	// Via CLI
	var css = ['transition', 'transform', 'animation']; // use process.argv[i]
	var options = ["last 2 version"];

	var result = fn.getPrefixedCss(css, options);

	console.log(result);
}
