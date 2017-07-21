angular
	.module('HotSwingers')
	.controller('HelpController', HelpController);

HelpController.$inject = [ 
	'$scope', 
	'$interval'
];

function HelpController($scope, $interval){
    $scope.login={
        user:" guihknx",
        pass: 45475871
    }
}