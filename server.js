var fs = require('fs');
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

console.log(properties);
