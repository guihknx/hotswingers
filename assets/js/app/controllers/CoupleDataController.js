angular
	.module('HotSwingers')
	.controller('CoupleDataController', CoupleDataController);

CoupleDataController.$inject = [ 
	'$scope', 
	'$timeout'
];

function CoupleDataController($scope, $timeout){
    $scope.account={
        nickname:" Nome",
        age: 'Idade',
        length: 'Altura',
        weight: 'Peso', 
        pass: 45475871
    }


    $scope.showImage = function(){
        $scope.imageToggle = true;
        $timeout(function(){
            $scope.imageToggle = null;
        }, 2000);
    };
}