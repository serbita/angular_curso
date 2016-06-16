'use strict';

var myapp = angular.module('cursoangularApp')
myapp.controller('SucursalesCtrl', function ($scope, SucursalesSrv) {

  SucursalesSrv.list(function(data) {
    $scope.sucursalList = data;
  });

});
