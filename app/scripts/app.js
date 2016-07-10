'use strict';

var myapp = angular.module('epantePagosApp', ["ngMessages","ui.router","ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"])
/*
1_ Here's the calling order:
2_ app.config()
3_ app.run()
4_ directive's compile functions (if they are found in the dom)
5_ app.controller()
*/
myapp.config(function($stateProvider, $urlRouterProvider,$locationProvider){
      
      // For any unmatched url, send to /
      $urlRouterProvider.otherwise("/error");
      
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
                "ayuda": {
                  template: "AYUDA. Esta seccion no es un html en archivo separado"
                },
                "users": {
                  templateUrl: "views/users.html",
                  controller: 'UsersCtrl'                  
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

        .state('ABMusers', {
            url: "/ABMusers",
            templateUrl: "views/users.html",
            controller: 'UsersCtrl'
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

        .state('error', {
            url: "/error",
            template: "<h1>Error url no definida</h1> <br> Poner: http://localhost:9000/views/payments.html#/0001"
        });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
              
})

/* Run. Sirve para inicializar la app */
myapp.run(function ($rootScope) {
    $rootScope.aboutPlusloginClicks = 0;
    $rootScope.isLoading = false;
    $rootScope.isError = false;
})

/* Directives */
myapp.directive('tabDirective', function(){
  return {
      restrict: 'E',
      templateUrl: "views/tab.html",
      controllerAs:"tab",
      controller:"TabController"
  }
});

myapp.directive('overwriteEmail', function() {
  var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@serbita\.com$/i;

  return {
    require: 'ngModel',
    restrict: '',
    link: function(scope, elm, attrs, ctrl) {
      // only apply the validator if ngModel is present and Angular has added the email validator
      if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default Angular email validator
        ctrl.$validators.email = function(modelValue) {
          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
        };
      }
    }
  };
});

myapp.directive('usernamevalidator', function($q, $timeout) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
    var usernames = ['Jim', 'John', 'Jill', 'Jackie'];

      ctrl.$asyncValidators.usernamevalidator = function(modelValue, viewValue) {
        if (ctrl.$isEmpty(modelValue)) {
          // consider empty model valid
          return $q.when();
        }

        var def = $q.defer();

        $timeout(function() {
          // Mock a delayed response
          if (usernames.indexOf(modelValue) === -1) {
            // The username is available
            def.resolve();
          } else {
            def.reject();
          }

        }, 2000);


        return def.promise;
      };
    }
  };
});

myapp.controller('TabController', function(){
  this.tab = 'route1';
  this.setTab = function(newValue){
    this.tab = newValue;
  };
  this.isSet = function(tabName){
    return this.tab === tabName;
  };
});


