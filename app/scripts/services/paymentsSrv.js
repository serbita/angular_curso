var myapp = angular.module('epantePagosApp')
myapp.factory('PaymentsSrv', function ($http) {
	var factory = {};

	factory.list = function(callbackFunction) {
		$http.get('http://private-7cd9-serbita.apiary-mock.com/employees')
  		.then(function(res){
  			callbackFunction(res.data.employees);
		});
  	};

	return factory;

});
