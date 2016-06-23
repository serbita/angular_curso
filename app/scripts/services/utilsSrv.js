'use strict';

var myapp = angular.module('epantePagosApp');

myapp.factory('APISrv', function ($http,$rootScope) {
  var factory = {};

  factory.get = function(uri) {
    $rootScope.isLoading = true;    
    return $http.get(uri)
          .then(function(res){
              $rootScope.isLoading = false;
              return res.data.payments;
          }, function(errResponse){
              console.error('Error Error');
              $rootScope.isLoading = false;              
              return $q.reject(errResponse);
          }
    );
  };

  factory.post = function(uri,body) {
    $rootScope.isLoading = true;    
    return $http.post(uri,body)
          .then(function(res){
              $rootScope.isLoading = false;
              return res.data;
          }, function(errResponse){
              console.error('Error Error');
              $rootScope.isLoading = false;              
              return $q.reject(errResponse);
          }
    );
  };

  return factory;
});
