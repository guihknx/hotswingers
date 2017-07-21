angular
	.module('HotSwingers')
	.controller('SideMenuController', SideMenuController);

SideMenuController.$inject = [ 
	'$scope', 
	'$timeout'
];

function SideMenuController($scope, $timeout){
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