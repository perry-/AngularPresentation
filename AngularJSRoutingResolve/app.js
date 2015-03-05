//'app.js';
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider, $route) {
    $routeProvider.
      when('/list', {
        templateUrl: 'list.html',
        controller: 'ListController'
      }).
      when('/edit/:id', {
        templateUrl: 'edit.html',
        controller: 'EditController'
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
      otherwise({
        redirectTo: '/list'
      });
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
           },5000);
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

myApp.controller('EditController', ['$scope', '$location', '$routeParams', '$timeout', 'UsersFactory', function($scope, $location, $routeParams, $timeout, UsersFactory) {
  $scope.user = UsersFactory.getUser([$routeParams.id]).then(
      function(data)
      {
        $scope.user = data;
        $scope.userOld = angular.copy($scope.user);
      }
    );
    
  $scope.save = function()
  {
    $location.path('#/list');
  };
  
  $scope.cancel = function()
  {
    $scope.users[$routeParams.id] = $scope.userOld;
    $location.path('#/list');
  };
  
}]);

myApp.controller('EditWithResolveController', ['$scope', '$location', '$routeParams', '$timeout', 'user', function($scope, $location, $routeParams, $timeout, user) {
  $scope.user = user;
  $scope.userOld = angular.copy($scope.user);
  
  $scope.save = function()
  {
    $location.path('#/list');
  };
  
  $scope.cancel = function()
  {
    $scope.users[$routeParams.id] = $scope.userOld;
    $location.path('#/list');
  };
  
}]);