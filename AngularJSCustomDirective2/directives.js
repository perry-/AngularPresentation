myApp.directive('login', function() {
  return {
    restrict: 'A',
    transclude: true,
    scope: {
      'logIn': '&signInClicked',
      'cancel': '&cancelClicked',
      'cssstyle':'@theme',
      'showCancel':'@showCancelButton'
    },
    templateUrl: 'loginDirective.html'
  };
});