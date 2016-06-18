'use strict';

var myapp = angular.module('cursoangularApp', ["ui.router","ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"])
/*
1_ Here's the calling order:
2_ app.config()
3_ app.run()
4_ directive's compile functions (if they are found in the dom)
5_ app.controller()
*/
myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/");
      
      $stateProvider
        .state('route1', {
            url: "/",
            views: {
                "todoList": {
                    templateUrl: "views/todoList.html",
                    controller: 'TodoListCtrl'
                },
                "billMaker": {
                    templateUrl: "views/billMaker.html",
                    controller: 'BillMakerCtrl'
                },
                "projectList": {
                    templateUrl: "views/project.html"
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

        .state('sucursales', {
            url: "/sucursales",
            templateUrl: "views/sucursales.html",
            controller: 'SucursalesCtrl'
        })

        .state('about', {
            url: "/about",
            templateUrl: "views/about.html",
            controller: 'AboutCtrl'
        })
        
        .state('route2.list', {
              url: "/list",
              templateUrl: "route2.list.html",
              controller: function($scope){
                $scope.things = ["A", "Set", "Of", "Things"];
              }
        })

        .state('login', {
              url: "/login",
              templateUrl: "views/login.html",
              controller: 'LoginCtrl'
        })

        .state('store', {
              url: "/store",
              templateUrl: "views/store.html"
              //,
              //controller: 'StoreCtrl'
        })



})
//Sirve para inicializar la app
myapp.run(function ($rootScope) {
    $rootScope.aboutPlusloginClicks = 0;
})

myapp.controller('TabController', function(){
  this.tab = 'route1';
  this.setTab = function(newValue){
    this.tab = newValue;
  };
  this.isSet = function(tabName){
    return this.tab === tabName;
  };
});

