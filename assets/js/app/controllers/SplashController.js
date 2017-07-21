angular
	.module('HotSwingers')
	.controller('SplashController', SplashController);

SplashController.$inject = [ 
	'$scope', 
	'$interval', 
    '$state',
	'roundProgressService'
];

function SplashController($scope,  $interval,$state, roundProgressService){
            $scope.current =        0;
            $scope.max =            100;
            $scope.timerCurrent =   0;
            $scope.uploadCurrent =  0;
            $scope.stroke =         15;
            $scope.radius =         125;
            $scope.isSemi =         false;
            $scope.rounded =        false;
            $scope.responsive =     false;
            $scope.clockwise =      true;
            $scope.currentColor =   'url(#grad1)';
            $scope.bgColor =        '#14001B';
            $scope.iterations =     25;
            $scope.currentAnimation = 'easeOutCubic';

            $scope.increment = function(amount){
                $scope.current+=(amount || 1);
            };
            $scope.decrement = function(amount){
                $scope.current-=(amount || 1);
            };
            $scope.animations = [];
            angular.forEach(roundProgressService.animations, function(value, key){
                $scope.animations.push(key);
            });
            $scope.getStyle = function(){
                return {
                    'top': $scope.isSemi ? 'auto' : '50%',
                    'bottom': $scope.isSemi ? '5%' : 'auto',
                    'left': '50%',
                    'transform': ($scope.isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)',
                    'font-size': $scope.radius/3.5 + 'px'
                };
            };
            $scope.getColor = function(){
                return $scope.gradient ? 'url(#gradient)' : $scope.currentColor;
            };
             var getPadded = function(val){
                return val < 10 ? ('0' + val) : val;
            };

           $interval(function(){
              if( $scope.current == 100 ){
                $state.go('login');
                return;
              }
              $scope.current = $scope.current+1
            },10)
    $interval(function(){
      // $scope.increment();
        var date = new Date();
        var secs = date.getSeconds();
        $scope.timerCurrent = secs;
        $scope.time = getPadded(date.getHours()) + ':' + getPadded(date.getMinutes()) + ':' + getPadded(secs);
    }, 1000);
}