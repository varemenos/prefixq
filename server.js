var fn = require('./fn');
var express = require('express');

var properties = fn.getCssProperties();

// console.log(properties);
console.log(fn.generateCssString(['align', 'z-index']));
