var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', '$http', '$interval', '$timeout', 'scopeInfoFactory', function($scope, $http, $interval, $timeout, scopeInfoFactory) {
  $scope.users = [];
  $scope.searchTerm = "";
  $scope.myScope = null;
  $scope.lastUpdated = null;
  $scope.counter = 0;
  $scope.firstname = '';
  $scope.elapsedInMs = null;
  $scope.low = 0;
  $scope.high = 0;
  
  $scope.timeFunction = function(start) {
    $scope.elapsedInMs = new Date() - start;
    if($scope.elapsedInMs < $scope.low || $scope.low === 0)
    {
      $scope.low = $scope.elapsedInMs;
    }
    
    if($scope.elapsedInMs > $scope.high)
    {
      $scope.high = $scope.elapsedInMs;
    }
  };
  
  $http.get('users.json')
    .then(function(res) {
      $scope.users = res.data;
      $scope.firstname = $scope.users[0].firstname;
    });
  
  $scope.SetWatchersCount = function() {
    $scope.lastUpdated = new Date();
    $scope.myScope = scopeInfoFactory.getScopeInfo();
    
    var start = new Date();
    
    $timeout(function(){
      $scope.timeFunction(start);
    },0,false);
  };
  
  $interval(function() { 
    $scope.SetWatchersCount();
    $scope.counter++;
  }, 3000, 0, true);
}]);

myApp.service('scopeInfoFactory', function() {
  var factory = {}; 
 
  factory.getScopeInfo = function () {
    var values = document.querySelectorAll(".ng-scope");
    var myScope= {'count': values.length, 'watchersCount' : angular.element(values[0]).data().$scope.$$watchersCount };
    
    console.log('Watcher count:' + myScope.watchersCount);
    
    var log = [];
    angular.forEach(values, function(value, key) {
      var e = angular.element(value);
    }, log);
    
    return myScope;
  };
  
  return factory;
});