angular.module('main')
.directive('login', () => {
	return {
		restrict: 'E',
		templateUrl: 'static/html/login.html'
	};
});