(function () {
	angular.module('apph05')
		.controller('oef01DetailController', oef01DetailController);
		
	oef01DetailController.$inject = ['$routeParams'];
	oef01DetailController.$inject = ['oef01CarFactory'];
		
	function oef01DetailController($routeParams, oef01CarFactory) {
		var _this = this;
		var id = $routeParams.id;
		
		_this.car = oef01CarFactory.getCar(id);
	}
})();