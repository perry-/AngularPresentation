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

presentation.controller('slide', function ($scope) {
  $scope.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});

presentation.controller('slide1', function ($scope, $locale) {
	$scope.background = "Norway.svg";
	$scope.title = "Internasjonalisering";

	if ($locale.id == 'en') {
		$scope.background = "English.png";
		$scope.title = "Internationalization";
	}
	else if($locale.id == 'de') {
		$scope.background = "Deutsch.png";
		$scope.title = "Internationalisierung";
	}
	
});
