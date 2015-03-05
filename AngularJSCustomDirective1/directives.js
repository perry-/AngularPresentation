myApp.directive('ciberSkill', function() {
  return {
    restrict: 'A',
    transclude: true,
    scope: {
      'skill': '=skillLevel',
      'click': '&notifyMe'
    },
    templateUrl: 'skillDirective.html'
  };
});