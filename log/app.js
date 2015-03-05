var myApp = angular.module('myApp',['ngRoute', 'ngAria']);

myApp.config(['$provide', function($provide){
    $provide.decorator("$log", function ($delegate) {
        var info = $delegate.info; 
        var error = $delegate.error; 
        var log = $delegate.log;

        $delegate.log = function (msg) {
          console.log("Message: "+msg);
        };

        $delegate.info = function(msg){
          alert(msg);
        };
        
        return $delegate;
    });
}]);

myApp.config(['$routeProvider',
  function($routeProvider, $route) {
    $routeProvider.
      when('/list', {
        templateUrl: 'list.html',
        controller: 'ListController'
      }).
      when('/editwithresolve/:id', {
        templateUrl: 'edit.html',
        controller: 'EditWithResolveController',
        resolve: {
          user: function($route, UsersFactory){
            return UsersFactory.getUser($route.current.params.id);
          }
        }
      }).
      when('/edit/:id', {
        templateUrl: 'edit.html',
        controller: 'EditController'
      }).
      otherwise({
        redirectTo: '/edit/1'
      });
  }]);


myApp.controller('EditController', ['$scope', '$location', '$routeParams', '$timeout', 'UsersFactory', '$log', function($scope, $location, $routeParams, $timeout, UsersFactory, $log) {
  $scope.user = UsersFactory.getUser([$routeParams.id]).then(
      function(data)
      {
        $scope.user = data;
        $scope.userOld = angular.copy($scope.user);
      }
    );
    
  $scope.save = function()
  {
    $log.log("Lagret");
  };
  
  $scope.cancel = function()
  {
    $log.info("Avbrutt");
  };
  
}]);
  
myApp.factory('UsersFactory', ['$http','$q', '$timeout', function($http, $q, $timeout) {
  return {
        getAllUsers: function(){
            return $q.when($http.get('users.json')
            );
        },
        getUser: function(id) {
          var deferred = $q.defer();
          $timeout(function(){
               deferred.resolve($http.get('users.json').then(function(res){
                 return res.data[id];
               }));
           },0);
          return deferred.promise;
        }
    };
}]);

myApp.controller('AppController', ['$scope','$rootScope', '$http', 'UsersFactory', function($scope, $rootScope, $http, UsersFactory) {
  $rootScope.$on('$routeChangeStart', function(event, next, current) {
    if(next.originalPath === '/editwithresolve/:id'){
      $scope.alertMessage = 'Loading...';
    }
  });
  
  $rootScope.$on('$routeChangeSuccess', function(event, next, current) {
    $scope.routeChangeStarted = false;
    $scope.alertMessage = null;
  });
  
  UsersFactory.getAllUsers().then(function(res) {
    $scope.users = res.data;
  });
}]);

myApp.controller('ListController', ['$scope', function($scope) {
  
}]);