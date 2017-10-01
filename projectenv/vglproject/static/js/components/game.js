angular.module('main')
.controller('gameController', ($scope, $http, $location) => {
	$scope.clickLogout = () => {
		$http({
			url: '/accounts/logout/',
			method: 'POST',
		}).then(function success(res) {
			$location.url('/');
		}, function error(res) {
		});

		// $http({
		// 	url: '/api/run/',
		// 	method: 'GET',
		// }).then(function success(res) {
		// 	res
		// }, function error(res) {
		// });
	};

})
.directive('game', () => {
	return {
		restrict: 'E',
		controller: 'gameController',
		templateUrl: 'static/html/game.html'
	};
});