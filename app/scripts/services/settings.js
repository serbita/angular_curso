var myapp = angular.module('cursoangularApp')
myapp.factory('settingsSrv', function ($rootScope, $http) {
	var factory = {};
	
	console.log('--->settingsSrv');
	$rootScope.sucursalList = [{"_id":"1212","nombre":"Sucursal Centro"},{"_id":"1213","nombre":"Sucursal Barrio Norte"}];

	return factory;

});

