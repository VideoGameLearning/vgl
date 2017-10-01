angular.module('main')
.directive('home', () => {
	return {
		restrict: 'E',
		templateUrl: 'static/html/home.html'
	};
});