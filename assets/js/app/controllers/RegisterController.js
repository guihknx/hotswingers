angular
	.module('HotSwingers')
	.controller('RegisterController', RegisterController);

RegisterController.$inject = [ 
	'$scope', 
	'$interval'
];

function RegisterController($scope, $interval){
    $scope.profile={
        name:" Cadu",
        pass: 45475871,
        rePass: 45475871,
        email: 'carlos.eduardo@gmail.com'
    }
}