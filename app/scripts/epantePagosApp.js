var myapp = angular.module('epantePagosApp', ['ui.router']);

myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/");
      
      $stateProvider
        .state('route1', {
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