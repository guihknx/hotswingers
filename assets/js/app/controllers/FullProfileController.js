angular
    .module('HotSwingers')
    .controller('FullProfileController', FullProfileController);

FullProfileController.$inject = [ 
    '$scope', 
    '$interval'
];

function FullProfileController($scope, $interval){
    $scope.profile={
        name:" Cadu",
        pass: 45475871,
        rePass: 45475871,
        email: 'carlos.eduardo@gmail.com'
    }
}