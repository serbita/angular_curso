var myapp = angular.module('epantePagosApp', ['ui.router']);

myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/");
      
      $stateProvider
        .state('route1', {
            url: "/",
            views: {
                "paymentsView": {
                    templateUrl: "../views/paymentList.html",
                    controller: 'PaymentsCtrl'
                },
                "ayuda": {
                    template: "AYUDA. Esta seccion no es un html en archivo separado"
                }
            }
        })

        .state('route1.list', {
              url: "/list",
              templateUrl: "route1.list.html",
              controller: function($scope){
                $scope.items = ["A", "List", "Of", "Items"];
              }
        })

        .state('empleados', {
            url: "/empleados",
            templateUrl: "views/employees.html",
            controller: 'EmployeesCtrl'
        })        
        
});