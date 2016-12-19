(function () {
	'use strict';
	angular.module('apph04')
		.controller('oef01DetailController', oef01DetailController);
		
	oef01DetailController.$inject = ['$routeParams'];
	
	var cars = [
		{ id: 1, description: 'A 180', price: 24.242, type: 'A', roadtax: 250.00, traffictax: 500, usage: 5.20 },
		{ id: 2, description: 'A 180 CDI BlueEFFICIENCY', price: 26.015, type: 'A', roadtax: 250.00, traffictax: 500, usage: 5.20 },
		{ id: 3, description: 'B 200 CDI BlueEFFICIENCY', price: 30.129, type: 'B', roadtax: 250.00, traffictax: 500, usage: 5.20 },
		{ id: 4, description: 'C 250 CGI BlueEFFICIENCY', price: 40.414, type: 'C', roadtax: 250.00, traffictax: 500, usage: 5.20 },
		{ id: 5, description: 'C 300 CDI 4Matic BlueEFFICIENCY', price: 48.642, type: 'C', roadtax: 250.00, traffictax: 500, usage: 5.20 },
		{ id: 6, description: 'C 350 CGI 4Matic BlueEFFICIENCY', price: 50.941, type: 'C', roadtax: 250.00, traffictax: 500, usage: 5.20 },
		{ id: 7, description: 'CL 500 CDI 4Matic BlueEFFICIENCY', price: 129.954, type: 'CL', roadtax: 250.00, traffictax: 500, usage: 5.20 },
		{ id: 8, description: 'CL 600', price: 170.489, type: 'CL' },
	];
		
	function oef01DetailController($routeParams) {
		var _this = this;
		var id = $routeParams.id;
		
		_this.car = cars[id - 1];
		
		for (var car in cars) {
			if (car.id == id) {
				_this.car = car;
				break;
			}
		}	
	}
})();