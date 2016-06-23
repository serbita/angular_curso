'use strict';

var myapp = angular.module('epantePagosApp')
myapp.controller('SucursalesCtrl', ['$scope','SucursalesSrv',function ($scope, SucursalesSrv) {
/*
  SucursalesSrv.list(function(data) {
    $scope.sucursalList = data;
  });
*/
	var self = this;
	self.sucursalList = [];

	self.userName = "Horacio Alberto Mancilla";
	self.barrio = "Barrio La Pancha";

	self.list = function(){
         SucursalesSrv.list().then(
         function(d) {
              self.sucursalList = d;
         },
         function(errResponse){
              console.error('Error while fetching Currencies');
         }
        );
    };

    self.list();
}]);
