app.controller('MainController', ['$scope', 'shows', function($scope, photos) {
  photos.success(function(data) {
    $scope.shows = data;
  });
}]);

