'use strict';

var myapp = angular.module('epantePagosApp')
myapp.factory('PaymentsSrv', function ($http) {
	var factory = {};

	factory.list = function() {
		console.log("--b");
		return $http.get('http://private-7cd9-serbita.apiary-mock.com/payments')
  		.then(
  			function(res){
  				return res.data.payments;
			}, 
            function(errResponse){
                console.error('Error while deleting user');
                return $q.reject(errResponse);
            }
		);
  	};

	return factory;

});
