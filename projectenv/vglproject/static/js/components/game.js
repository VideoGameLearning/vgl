angular.module('main')
.directive('game', () => {
	return {
		restrict: 'E',
		templateUrl: 'static/html/game.html'
	};
});