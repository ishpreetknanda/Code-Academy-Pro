app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95 
    }
  ];
  
  $scope.mains = [
      { 
        name: 'Tandoori Chicken Pizza',
        cuisine: 'Indian',
        price : 8
        },
      { 
        name: 'Parmesan & Mushroom Chicken Pizza',
        cuisine: 'Italian',
        price : 10
        },
      { 
        name: 'Turkey Bacon Pizza',
        cuisine: 'Italian',
        price : 12
        }
    
    ];
  $scope.extras = [
      { 
        name: 'Hummus',
        cuisine: 'Mediterranean',
        price : 3
        },
      { 
        name: 'Momos',
        cuisine: 'Chinese',
        price : 4
        },
      { 
        name: 'Samosa',
        cuisine: 'India',
        price : 3
        },
      { 
        name: 'Coleslaw',
        cuisine: 'Mediterranean',
        price : 3
        }
    
    ]

}]);