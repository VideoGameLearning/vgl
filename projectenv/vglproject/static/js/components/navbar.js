angular.module('home')
.directive('navbar', () => {
	return {
		restrict: 'E',
		templateUrl: 'static/html/navbar.html'
	};
});