app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.',
        avatar: 'http://icons.iconarchive.com/icons/yusuke-kamiyamane/fugue/16/user-small-icon.png'
      },
      comment: {
        img: 'https://static.pexels.com/photos/7720/night-animal-dog-pet.jpg',
        text: 'How much for that dogg in the window?'
      }
    },
    {
      author: {
        name: 'Matthew Healy',
        avatar: 'http://icons.iconarchive.com/icons/milosz-wlazlo/boomy/16/user-icon.png'
      },
      comment: {
        text: 'I used to have a recurring dream when I was younger.'
      }
    }
  ];
}]);