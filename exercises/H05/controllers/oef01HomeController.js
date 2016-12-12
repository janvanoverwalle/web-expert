(function () {
	angular.module('apph05')
		.controller('oef01HomeController', oef01HomeController);
		
	oef01HomeController.$inject = ['oef01CarFactory'];
		
	function oef01HomeController(oef01CarFactory) {
		var _this = this;
		
		_this.cars = oef01CarFactory.getCars();
	}
})();