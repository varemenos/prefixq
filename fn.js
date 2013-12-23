var fs = require('fs');

module.exports.getCssProperties = function () {
	var prefix = 'css/properties/';

	var data = fs.readFileSync('css-properties.json', {'encoding': 'utf8'});
	data = JSON.parse(data).query.results;
	var properties = [];

	for (property in data) {
		if (data.hasOwnProperty(property)) {
			property = property.replace(prefix, '');

			if (property.substring(0, 3) !== 'ms-') {
				properties.push(property);
			}
		}
	}

	return properties;
}

module.exports.generateCssString = function (properties) {
	var result = false;

	if (properties.push) {
		result = '.class{';

		for (var i = 0; i < properties.length; i++) {
			result += properties[i].toString() + ': #c22;';
		}

		result += '}';
	} else {
		var result;

		result = '.class{' + properties.toString() + ': #c22;' + '}';
	}

	if (result) {
		return result;
	}
}
