var myApp = angular.module('myApp',[]);

myApp.controller('myCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.users = [];
  $scope.searchTerm = "";
  $scope.test = "<b>Testing</b>More";
  
  $http.get('users.json')
    .then(function(res) {
      $scope.users = res.data;
    });
}]);