angular
	.module('HotSwingers')
	.controller('LocationController', LocationController);

LocationController.$inject = [ 
	'$scope', 
	'$interval'
];

function LocationController($scope, $interval){
    $scope.login={
        user:" guihknx",
        pass: 45475871
    }
}