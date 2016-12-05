var app = angular.module('h03', []);
app.controller('oef01',
	function ($scope) {
		// 1. array met artikelen
		$scope.articles = [
			{ number: '000001', description: 'Tandenborstel', sellprice: 3.25, buyprice: 1.50 },
			{ number: '000002', description: 'Handdoek', sellprice: 4.75, buyprice: 2.50 },
			{ number: '000003', description: 'Washandje', sellprice: 1.20, buyprice: 0.40 },
			{ number: '000004', description: 'Keukenrol', sellprice: 1.75, buyprice: 0.65 },
			{ number: '000005', description: 'Tandpasta', sellprice: 0.65, buyprice: 0.15 },
		];

		// 2. klikken op een artikel afvangen
		$scope.onClickArticle = function (article) {
			alert(article.description + "\r\nVerkoopprijs: " + article.sellprice + "\r\nAankoopprijs: " + article.buyprice);
		}

	}
);

app.controller('oef02',
	function ($scope) {
		$scope.sum = function () {
			$scope.result = parseInt($scope.a) + parseInt($scope.b);
		}
	}
);

app.controller('oef03', [oef03Controller]);
function oef03Controller() {
	var _this = this;
	
	// 1. array met artikelen
	_this.articles = [
		{ number: '000001', description: 'Tandenborstel', sellprice: 3.25, buyprice: 1.50 },
		{ number: '000002', description: 'Handdoek', sellprice: 4.75, buyprice: 2.50 },
		{ number: '000003', description: 'Washandje', sellprice: 1.20, buyprice: 0.40 },
		{ number: '000004', description: 'Keukenrol', sellprice: 1.75, buyprice: 0.65 },
		{ number: '000005', description: 'Tandpasta', sellprice: 0.65, buyprice: 0.15 },
	];

	// 2. klikken op een artikel afvangen
	_this.onClickArticle = function (article) {
		alert(article.description + "\r\nVerkoopprijs: " + article.sellprice + "\r\nAankoopprijs: " + article.buyprice);
	};
};