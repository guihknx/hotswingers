angular
	.module('HotSwingers')
	.controller('ForgotController', ForgotController);

ForgotController.$inject = [ 
	'$scope', 
	'$interval'
];

function ForgotController($scope, $interval){
    $scope.login={
        user:" guihknx",
        pass: 45475871
    }
}