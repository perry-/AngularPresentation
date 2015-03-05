var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.login = function(message) {
    alert('Log in ' + message + ' was clicked!!!');
  }
}]);