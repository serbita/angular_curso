'use strict';

var myapp = angular.module('cursoangularApp')
myapp.controller('AboutCtrl', function ($scope,$rootScope) {

	$rootScope.aboutPlusloginClicks++;
	console.log($rootScope.aboutPlusloginClicks);
  
})
