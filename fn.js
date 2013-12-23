'use strict';

var fs = require('fs');
var autoprefixer = require('autoprefixer');

module.exports.getCssProperties = function () {
	var prefix = 'css/properties/';

	var data = fs.readFileSync('css-properties.json', {'encoding': 'utf8'});
	data = JSON.parse(data).query.results;
	var properties = [];

	for (var property in data) {
		if (data.hasOwnProperty(property)) {
			property = property.replace(prefix, '');

			if (property.substring(0, 3) !== 'ms-') {
				properties.push(property);
			}
		}
	}

	return properties;
}

var generateCssString = function (properties) {
	var result = false;

	if (properties.push) {
		// Array
		result = '.class{\n';

		for (var i = 0; i < properties.length; i++) {
			result += '\t' + properties[i].toString() + ': #c22;\n';
		}

		result += '}';
	} else if (properties.length) {
		// String
		result = '.class{\n';

		result += '\t' + properties.toString() + ': #c22;\n';

		result += '}';
	} else {
		// Object
		result = '.class{\n';

		for (var property in properties) {
			if (properties.hasOwnProperty(property)) {
				result += '\t' + property.toString() + ': ' + properties[property] + ';\n';
			}
		}

		result += '}';
	}

	if (result) {
		return result;
	}
}

module.exports.getPrefixedCss = function (css, options) {
	var result;

	css = generateCssString(css);

	result = autoprefixer(options || ["last 2 version"]).process(css).css;

	return result;
}
