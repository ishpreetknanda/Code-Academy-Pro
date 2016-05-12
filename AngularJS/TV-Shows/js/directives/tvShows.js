app.directive('tvShow', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/tvShows.html' 
  }; 
});