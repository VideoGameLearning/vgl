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
	};
})
.directive('game', () => {
	return {
		restrict: 'E',
		controller: 'gameController',
		templateUrl: 'static/html/game.html'
	};
});