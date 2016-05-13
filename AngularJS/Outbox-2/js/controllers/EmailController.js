app.controller('EmailController', ['$scope', 'emails', '$routeParams', function($scope, emails, $routeParams) {
  emails.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);


