var myapp = angular.module('epantePagosApp')
myapp.factory('settingsSrv', function ($rootScope, $http) {
	var factory = {};

	//$rootScope.sucursalList = [{"_id":"1212","nombre":"Sucursal Centro"},{"_id":"1213","nombre":"Sucursal Barrio Norte"}];
	$rootScope.aboutPlusloginClicks = 0;

	return factory;

});

