angular.module('main')
.directive('navbar', () => {
	return {
		restrict: 'E',
		templateUrl: 'static/html/navbar.html'
	};
});