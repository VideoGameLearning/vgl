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
	
	$scope.clickRun = () => {
		var arr = $scope.playerInput.split(',');
		console.log('arr ', arr);
		var data = [
		[[], [], [], [], []],
	  [[], [], [], [], []],
	  [[], [], [], [], []],
	  [['X'], [], [], [], []],
	  [[], [], [], [], []]];

	  var table = angular.element(document.getElementsByClassName('table'))[0];
	  // console.log('children ', table.getElementsByTagName('TR'));
	  var rows = table.getElementsByTagName('TR');
	  for (var i = 0; i < rows.length; i++) {
	  	cells = rows[i].getElementsByTagName('TD');
	  	for (var j = 0; j < cells.length; j++) {
	  		if (JSON.stringify(data[i][j]) === '[]') {
	  			cells[j].style.backgroundImage = 'url(static/assets/grass.png)';
	  		} else {
	  			cells[j].style.backgroundImage = 'url(static/assets/man.png)';
	  		}
	  	}
	  }

		// $http({
		// 	url: '/api/run/',
		// 	method: 'POST',
		// 	headers: {
		// 		'X-Requested-With': 'XMLHttpRequest',
		// 		'Content-Type': 'application/x-www-form-urlencoded'
		// 	},
		// 	data: {
		// 		commands: arr
		// 	}
		// }).then(function success(res) {

		// }, function error(res) {
		// });

	}

})
.directive('game', () => {
	return {
		restrict: 'E',
		controller: 'gameController',
		templateUrl: 'static/html/game.html'
	};
});