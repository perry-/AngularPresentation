//'app.js';
var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',
  function($routeProvider, $route) {
    $routeProvider.
      when('/list', {
        templateUrl: 'list.html',
        controller: 'ListController'
      }).
      otherwise({
        redirectTo: '/list'
      });
  }]);

myApp.controller('AppController', ['$scope', function($scope) {
  
}]);

myApp.controller('ListController', ['$scope', function($scope) {
  $scope.users = [
    { "index": 0, "balance": 7048.224, "currency": "$", "age": 43, "eyeColor": "grey", "firstname": "Manuela", "surname": "Cantu", "gender": "female", "registered": "2014-02-01T09:47:27" },
    { "index": 1, "balance": 53793.535, "currency": "£", "age": 44, "eyeColor": "grey", "firstname": "Malinda", "surname": "Berg", "gender": "female", "registered": "2015-01-19T14:38:31" },
    { "index": 2, "balance": 70327.439, "currency": "kr", "age": 49, "eyeColor": "blue", "firstname": "Becker","surname": "Maldonado", "gender": "male", "registered": "2014-12-05T17:24:29" },
    { "index": 3, "balance": 29444.379, "currency": "$","age": 26,"eyeColor": "green", "firstname": "Danielle", "surname": "Mccoy", "gender": "female", "registered": "2014-10-01T13:55:14" },
    { "index": 4, "balance": 9265.558, "currency": "$", "age": 55, "eyeColor": "blue", "firstname": "Rosanne", "surname": "Bauer", "gender": "female", "registered": "2014-05-09T20:29:35" },
    { "index": 5, "balance": 29772.904, "currency": "kr", "age": 48, "eyeColor": "blue", "firstname": "Mcintosh", "surname": "Dale", "gender": "male", "registered": "2014-08-24T04:56:56" },
    { "index": 6, "balance": 57729.721, "currency": "$", "age": 30, "eyeColor": "grey", "firstname": "Anne", "surname": "Mcknight", "gender": "female", "registered": "2014-08-25T17:02:14" },
    { "index": 7, "balance": 52156.563, "currency": "£", "age": 33, "eyeColor": "grey", "firstname": "Larsen", "surname": "Roberts", "gender": "male", "registered": "2014-04-30T05:10:10" },
    { "index": 8, "balance": 56248.568, "currency": "£", "age": 32, "eyeColor": "green", "firstname": "Natalie", "surname": "Rutledge", "gender": "female", "registered": "2014-03-04T22:28:42" },
    { "index": 9, "balance": 18254.261, "currency": "kr", "age": 41, "eyeColor": "green", "firstname": "Wong","surname": "Lott", "gender": "male", "registered": "2014-04-21T11:21:56" },
    { "index": 10, "balance": 90717.858, "currency": "$", "age": 32, "eyeColor": "brown", "firstname": "Kennedy", "surname": "Soto", "gender": "male", "registered": "2014-06-01T05:48:10" } 
  ];
}]);

myApp.controller('EditController', ['$scope', function($scope) {
  
  
}]);