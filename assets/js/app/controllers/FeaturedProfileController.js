angular
	.module('HotSwingers')
	.controller('FeaturedProfileController', FeaturedProfileController);

FeaturedProfileController.$inject = [ 
	'$scope', 
	'$timeout'
];

function FeaturedProfileController($scope, $timeout){
    $scope.account={
        nickname:" Nome",
        age: 'Idade',
        length: 'Altura',
        weight: 'Peso', 
        pass: 45475871
    }
}