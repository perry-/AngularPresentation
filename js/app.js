var presentation = angular.module('presentation', []);

presentation.controller('bindingCtrl', function($scope) {
  $scope.title = "Two Way Binding";
});

presentation.controller('forEachCtrl', function($scope) {
	$scope.title = "For each";

	$scope.orders = [
        {'OrderId': 5200902, 'OrderName': 'Physical treatment'},
		{'OrderId': 5200903, 'OrderName': 'Dentist appointment'},
		{'OrderId': 5200904, 'OrderName': 'Sick children'}
	];
	
});

presentation.controller('filterCtrl', function($scope) {
  $scope.title = "Filter";

});
