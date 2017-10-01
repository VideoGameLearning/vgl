var app = angular.module('main', ['ngRoute', 'ngCookies']);
app.config(($routeProvider, $httpProvider) => {
	$httpProvider.defaults.xsrfCookieName = 'csrftoken';
  $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
	$routeProvider
	.when('/', {
		template: '<home></home>',
		authenticated: false
	})
	.when('/game', {
		template: '<game></game>',
		authenticated: false
	});
});

app.run(($rootScope) => {
	window.fbAsyncInit = function() {
	FB.init({
	    appId      : 'your-app-id',
	    status     : true,
	    xfbml      : true
    });
  };
  
  (function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/all.js";
   fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
});