'use strict';

var myapp = angular.module('cursoangularApp')
myapp.controller('LoginCtrl', function ($scope,$rootScope) {

  $rootScope.aboutPlusloginClicks++;

});
