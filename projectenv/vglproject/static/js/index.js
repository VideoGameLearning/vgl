var app = angular.module('home', ['ngRoute', 'ngCookies']);
app.config(($routeProvider, $httpProvider) => {
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$routeProvider
	.when('/', {
		template: '<main></main>',
		authenticated: false
	});
});