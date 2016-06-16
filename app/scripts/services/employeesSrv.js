var myapp = angular.module('cursoangularApp')
myapp.factory('EmployeesSrv', function ($http) {
	var factory = {};

	factory.list = function(callbackFunction) {
		$http.get('http://private-7cd9-serbita.apiary-mock.com/employees')
  		.then(function(res){
  			callbackFunction(res.data.employees);
		});
  	};

	return factory;

});
