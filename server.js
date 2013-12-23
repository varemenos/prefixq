'use strict';

var fn = require('./fn');
var express = require('express');

var properties = fn.getCssProperties();

var options = ["last 2 version"];
var css = fn.generateCssString(['transition', 'transform', 'animation']);

var result = fn.getPrefixedCss(css, options);

console.log(result);
