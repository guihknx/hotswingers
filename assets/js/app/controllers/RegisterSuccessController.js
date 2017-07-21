angular
	.module('HotSwingers')
	.controller('RegisterSuccessController', RegisterSuccessController);

RegisterSuccessController.$inject = [ 
	'$scope', 
	'$timeout'
];

function RegisterSuccessController($scope, $timeout){
    $scope.account={
        nickname:" Nome",
        age: 'Idade',
        length: 'Altura',
        weight: 'Peso', 
        pass: 45475871
    }
}