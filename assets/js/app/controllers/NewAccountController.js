angular
	.module('HotSwingers')
	.controller('NewAccountController', NewAccountController);

NewAccountController.$inject = [ 
	'$scope', 
	'$interval'
];

function NewAccountController($scope, $interval){
    $scope.account={
        nickname:" Nome",
        age: 'Idade',
        length: 'Altura',
        weight: 'Peso',
        pass: 45475871
    }
}