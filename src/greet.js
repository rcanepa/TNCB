'use strict';

var greet = function(name){
	return name ? 'Hello ' + name + '!' : 'Hello World!';
};

module.exports = greet;