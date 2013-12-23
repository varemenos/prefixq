'use strict';

var fn = require('./fn');

if(process.argv.length <= 2){
	// Via HTTP
	var address = { host: '127.0.0.1', port: 3001 };

	var express = require('express');
	var routes = require('./routes');

	var app = express();

	app.configure(function () {
		app.use(express.logger('dev'));
		app.use(express.json());
		app.use(express.urlencoded());
	});

	app.get('/', routes.index); //Use this to return a webapp to get the user to select which properties he wants prefixed
	app.get('/api/', routes.api_default); // Docs for default API
	app.get('/api/v1', routes.api_v1); // Docs for API v1
	// app.get('/api/v1/action', api_v1.action); // Action action of API v1
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
