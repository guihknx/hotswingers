angular
	.module('HotSwingers')
	.controller('GetHotcodeController', GetHotcodeController);

GetHotcodeController.$inject = [ 
	'$scope', 
	'$interval'
];

function GetHotcodeController($scope, $interval){
    $scope.hotCode = 574578578; 
}