(function () {
	'use strict';
	angular.module('apph04')
		.controller('oef01HomeController', oef01HomeController);
		
	function oef01HomeController() {
		var _this = this;
		
		_this.cars = [
			{ id: 1, description: 'A 180', price: 24.242, type: 'A' },
			{ id: 2, description: 'A 180 CDI BlueEFFICIENCY', price: 26.015, type: 'A' },
			{ id: 3, description: 'B 200 CDI BlueEFFICIENCY', price: 30.129, type: 'B' },
			{ id: 4, description: 'C 250 CGI BlueEFFICIENCY', price: 40.414, type: 'C' },
			{ id: 5, description: 'C 300 CDI 4Matic BlueEFFICIENCY', price: 48.642, type: 'C' },
			{ id: 6, description: 'C 350 CGI 4Matic BlueEFFICIENCY', price: 50.941, type: 'C' },
			{ id: 7, description: 'CL 500 CDI 4Matic BlueEFFICIENCY', price: 129.954, type: 'CL' },
			{ id: 8, description: 'CL 600', price: 170.489, type: 'CL' },
		];
	}
})();