angular
	.module('HotSwingers')
	.controller('MainController', MainController);

MainController.$inject = [ 
	'$scope', 
	'$timeout'
];

function MainController($scope, $timeout){
    
    $scope.text = $scope.menu ? 'close menu':'open menu';


    $scope.toggleMenu = function(){
        $scope.menu = !$scope.menu;
        $scope.text = $scope.menu ? 'close menu':'open menu';
        
    };
}