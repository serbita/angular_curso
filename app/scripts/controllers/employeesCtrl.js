'use strict';

var myapp = angular.module('cursoangularApp')
myapp.controller('EmployeesCtrl', function ($scope,EmployeesSrv) {

  EmployeesSrv.list(function(data) {
    $scope.employeeList = data;
  });

});
