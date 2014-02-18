var presentation = angular.module('presentation', []);
 
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
