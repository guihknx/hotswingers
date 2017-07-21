angular
	.module('HotSwingers')
	.controller('LoginController', LoginController);

LoginController.$inject = [ 
	'$scope', 
	'$interval'
];

function LoginController($scope, $interval){
    $scope.login={
        user:" guihknx",
        pass: 45475871
    }
}