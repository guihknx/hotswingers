angular
	.module('HotSwingers')
	.controller('HotcodeController', HotcodeController);

HotcodeController.$inject = [ 
	'$scope', 
	'$interval'
];

function HotcodeController($scope, $interval){
    $scope.hotCode = 574578578; 
}