(function () {
	angular.module('apph04', ['ngRoute']).config(moduleConfig);
	
	moduleConfig.$inject = ['$routeProvider'];
	
	function moduleConfig($routeProvider) {
		$routeProvider.when('/', {
            templateUrl: 'views/oef01home.html',
            controller: 'oef01HomeController',
            controllerAs: 'homeCtrlr'
        })
		.when('/home', {
            templateUrl: 'views/oef01home.html',
            controller: 'oef01HomeController',
            controllerAs: 'homeCtrlr'
        })
		.when('/detail/:id', {
            templateUrl: 'views/oef01detail.html',
            controller: 'oef01DetailController',
            controllerAs: 'detailCtrlr'
        })
		.when('/partners', {
            templateUrl: 'views/oef01partners.html',
            controller: 'oef01PartnersController',
            controllerAs: 'partnersCtrlr'
        })
		.otherwise({
			redirectTo: '/'
		});
	}
})();