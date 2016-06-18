var gems = [
    { name: 'Azurite', price: 2 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 }
  ];

var myapp = angular.module('cursoangularApp');
myapp.controller('StoreController', function(){
    this.products=gems;
});


