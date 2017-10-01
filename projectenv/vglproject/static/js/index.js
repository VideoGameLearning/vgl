var app = angular.module('main', ['ngRoute', 'ngCookies']);
app.config(($routeProvider, $httpProvider) => {
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$routeProvider
	.when('/', {
		template: '<home></home>',
		authenticated: false
	})
	.when('/login', {
		template: '<login></login>',
		authenticated: false
	})
	.when('/game', {
		template: '<game></game>',
		authenticated: false
	});
});