myApp.filter('marksearch', function($sce) {
  return function(input, searchTerm) {
    if(!searchTerm)
    {
      return input;
    }
    else
    {
      var from = input.toLowerCase().indexOf(searchTerm.toLowerCase());
      var to = searchTerm.length;
      
      return $sce.trustAsHtml(input.substring(0, from) + '[' + input.substring(from, from + to) + ']' + input.substring(from + to, input.length));
    }
  };
});

myApp.filter('highlight', function($sce) {
  return function(input, searchTerm) {
    if(!searchTerm)
    {
      return $sce.trustAsHtml(input);
    }
    else
    {
      var from = input.toLowerCase().indexOf(searchTerm.toLowerCase());
      var to = searchTerm.length;
      
      return $sce.trustAsHtml(input.substring(0, from) + '<span class="highlightedText">' + input.substring(from, from + to) + '</span>' + input.substring(from + to, input.length));
    }
  };
});

myApp.filter('highlightwithclass', function($sce) {
  return function(input, searchTerm, classname) {
    if(!searchTerm)
    {
      return $sce.trustAsHtml(input);
    }
    else
    {
      var from = input.toLowerCase().indexOf(searchTerm.toLowerCase());
      var to = searchTerm.length;
      
      return $sce.trustAsHtml(input.substring(0, from) + '<span class="' + classname + '">' + input.substring(from, from + to) + '</span>' + input.substring(from + to, input.length));
    }
  };
});