var myapp = angular.module('epantePagosApp', ['ui.router']);

myapp.config(function($stateProvider, $urlRouterProvider,$locationProvider){
      
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
        });


});

//Sirve para inicializar la app
myapp.run(function ($rootScope) {
    $rootScope.isLoading = true;
    
    $rootScope.isLabelInfo = function(status) {
        var res = false;
        if (status == 'created' || status == 'in-progress' || status == 'email-sending' || 
            status == 'in-proceess' || status == 'email-sent' || status == 'pending') res = true;
        return res;
    };
    $rootScope.isLabelDanger = function(status) {
        var res = false;
        if (status == 'rejected'  || status == 'error') res = true;
        return res;
    };
    $rootScope.isLabelSuccess = function(status) {
        var res = false;
        if (status == 'approved') res = true;
        return res;
    };
    $rootScope.isLabelDefault = function(status) {
        var res = false;
        if (status == 'cancelled' || status == 'refunded'  || status == 'in_mediation' || 
            status == 'charged_back' ) res = true;
        return res;
    };    

    $rootScope.getStatusName = function(status) {
        var res = 'not mached';
        if (status == 'created') res = 'Creado';
        if (status == 'in-progress') res = 'En progreso';
        if (status == 'in-process') res = 'En proceso';
        if (status == 'pending') res = 'Pendiente';
        if (status == 'cancelled') res = 'Cancelado';
        if (status == 'pending') res = 'Pendiente';
        if (status == 'refunded') res = 'Devuelto';
        if (status == 'in-mediation') res = 'En mediacion';
        if (status == 'charged_back') res = 'Con contracargo';
        if (status == 'rejected') res = 'Rechazado';
        if (status == 'error') res = 'Error';                
        if (status == 'email-sending') res = 'Enviando email';
        if (status == 'email-sent') res = 'Email enviado';
        if (status == 'approved') res = 'Aprobado';
        return res;
    };    
});