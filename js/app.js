var presentation = angular.module('presentation', []);

presentation.controller('bindingCtrl', function($scope) {
	$scope.title = "Two Way Binding";
});

presentation.controller('ngRepeatCtrl', function($scope) {
	$scope.title = "ng-Repeat";
});

presentation.controller('filterCtrl', function($scope) {
	$scope.title = "Filter";
}); 

presentation.controller('localeCtrl', function($scope) {
	$scope.title = "";
});
