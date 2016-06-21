'use strict';

var myapp = angular.module('epantePagosApp', [])

/*
1_ Here's the calling order:
2_ app.config()
3_ app.run()
4_ directive's compile functions (if they are found in the dom)
5_ app.controller()


myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/");
      
      $stateProvider
        .state('route1', {
            url: "/",
            views: {
                "todoList": {
                    templateUrl: "../views/paymentList.html"
            }
        })

})
*/

