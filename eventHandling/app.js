var myApp = angular.module('myApp',[]);

myApp.controller('parent1', ['$scope', '$rootScope', function($scope, $rootScope) {
  
  $scope.$on('emit', function(event){
    $scope.parentActive = true;
  });
  
  $scope.$on('broadcast', function(){
    $scope.parentActive = true;
  });
  
  $scope.broadcast = function(){
    $scope.$broadcast('broadcast');
  };
  
}]);

myApp.controller('child1', ['$scope', '$rootScope', function($scope, $rootScope) {
  
  $scope.emit = function(){
    $scope.$emit('emit');
  };  
  
  $scope.$on('broadcast', function(){
    $scope.childActive = true;
  });
  
}]);

myApp.controller('child2', ['$scope', '$rootScope', function($scope, $rootScope) {
  
  $scope.$on('broadcast', function(){
    $scope.childActive = true;
  });
  
}]);

myApp.controller('parent2', ['$scope', '$rootScope', function($scope, $rootScope) {
  
  $scope.$on('emit', function(event){
    $scope.parentActive = true;
  });
  
  $scope.$on('broadcast', function(){
    $scope.parentActive = true;
  });
  
  $scope.broadcast = function(){
    $scope.$broadcast('broadcast');
  };
  
  
}]);

myApp.controller('child3', ['$scope', '$rootScope', function($scope, $rootScope) {
  
  $scope.emit = function(){
    $scope.$emit('emit');
  };  
  
  $scope.$on('broadcast', function(){
    $scope.childActive = true;
  });
  
}]);

myApp.controller('root', ['$scope', '$rootScope', function($scope, $rootScope) {
  
  $scope.broadcast = function(){
    $rootScope.$broadcast('broadcast');
  };  
  
  $scope.$on('broadcast', function(){
    $scope.childActive = true;
  });
  
}]);