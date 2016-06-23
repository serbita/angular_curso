var myapp = angular.module('epantePagosApp', ['ui.router']);

myapp.config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/");
      
      $stateProvider
        .state('/', {
            url: "/:codUser",
            views: {
                "paymentsView": {
                    templateUrl: "../views/paymentList.html",
                    controller: 'PaymentsCtrl'
                }
            }
        })        
});

//Sirve para inicializar la app
myapp.run(function ($rootScope) {
    $rootScope.isLoading = true;    
})