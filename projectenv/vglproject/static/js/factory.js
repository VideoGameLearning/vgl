angular.module("main").factory('Facebook', 
  ["$q", "$window", "$rootScope",
  function($q, $window, $rootScope) {   
		var resolve = function(errval, retval, deferred) {
	    $rootScope.$apply(function() {
	      if (errval) {
		    	deferred.reject(errval);
	      } else {
		    	retval.connected = true;
	        deferred.resolve(retval);
	      }
	    });
    }

		var _login = function(){
	    var deferred = $q.defer();
	    FB.getLoginStatus(function(response) {
	      if (response.status === 'connected') {
		    	console.log("fb user already logged in");
		    	deferred.resolve(response);
				} else {
			    FB.login(function(response){
			      if(response.authResponse){
				    	console.log("fb user logged in");
				    	resolve(null, response, deferred);
						} else {
					    console.log("fb user could not log in");
					    resolve(response.error, null, deferred);
						}
			  	});
			 	}
	    });
			return deferred.promise;
		}

		return {
			login: _login,
		};
}]);