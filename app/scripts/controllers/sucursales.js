'use strict';

var myapp = angular.module('cursoangularApp')
myapp.controller('sucursalesCtrl', function ($scope, $rootScope, sucursalesSrv) {

  sucursalesSrv.list(function(poneys) {
    $rootScope.sucursalList = poneys;
  });

});
