angular
	.module('HotSwingers')
	.controller('CoupleVideosController', CoupleVideosController);

CoupleVideosController.$inject = [ 
	'$scope', 
	'$timeout'
];

function CoupleVideosController($scope, $timeout){
    $scope.account={
        nickname:" Nome",
        age: 'Idade',
        length: 'Altura',
        weight: 'Peso', 
        pass: 45475871
    }
}