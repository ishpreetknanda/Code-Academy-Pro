app.controller('MainController', ['$scope', function($scope) {
 
  $scope.apps = [ 
  { 
    icon: 'https://codecademy4194469-8000.ccterminalcloud.com/img/move.jpg', 
    title: 'MOVE', 
    developer: 'MOVE, Inc.', 
    price: 0.99 
  }, 
  { 
    icon: 'https://codecademy4194469-8000.ccterminalcloud.com/img/shutterbugg.jpg', 
    title: 'Shutterbugg', 
    developer: 'Chico Dusty', 
    price: 2.99 
  } , 
  { 
    icon: 'https://codecademy4194469-8000.ccterminalcloud.com/img/gameboard.jpg', 
    title: 'Gameboard', 
    developer: 'Armando P.',
    price: 1.99
  }, 
  { 
    icon: 'https://codecademy4194469-8000.ccterminalcloud.com/img/forecast.jpg', 
    title: 'Forecast', 
    developer: 'Forecast',
    price: 1.99
  }
]
  
}]);