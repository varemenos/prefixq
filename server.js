'use strict';

var fn = require('./fn');
var express = require('express');

var properties = fn.getCssProperties();

var options = ["last 2 version"];

var result = fn.getPrefixedCss(['transition', 'transform', 'animation'], options);

console.log(result);
