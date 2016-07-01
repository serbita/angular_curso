'use strict';

var myapp = angular.module('epantePagosApp');

myapp.factory('APISrv', function ($http,$rootScope,$q) {
  var factory = {};

  /*
  retorna algo como {data: Object, status: 200, config: Object, statusText: "OK"}
  */
  factory.get = function(uri) {
    var def = $q.defer();
    $rootScope.isLoading = true;    
    $http.get(uri)
          .then(function (res){
              def.resolve(res);
              $rootScope.isLoading = false;
          }, function(errResponse){
              def.reject(errResponse);
              console.error('Error...');
              $rootScope.isLoading = false;
              $rootScope.isError = true;
          }
    );
    return def.promise;
  };

  /*
  retorna algo como {data: Object, status: 200, config: Object, statusText: "OK"}
  */
  factory.post = function(uri,body) {
    var def = $q.defer();
    $rootScope.isLoading = true;    
    $http.post(uri,body)
          .then(function(res){
              def.resolve(res);
              $rootScope.isLoading = false;
          }, function(errResponse){
              def.reject(errResponse);
              console.error('Error...');
              $rootScope.isLoading = false;
              $rootScope.isError = true;
          }
    );
    return def.promise;
  };

  return factory;
});
