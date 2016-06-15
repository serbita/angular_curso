'use strict';

var myapp = angular.module('cursoangularApp', ["ui.router","ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"])
myapp.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/")
      
      $stateProvider
        .state('route1', {
            url: "/",
            views: {
                "todoList": {
                    templateUrl: "views/todoList.html",
                    controller: 'todoListCtrl'
                },
                "billMaker": {
                    templateUrl: "views/billMaker.html",
                    controller: 'billMakerCtrl'
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
          
        .state('about', {
            url: "/about",
            templateUrl: "views/about.html"
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
              controller: 'loginCtrl'
        })

    })
