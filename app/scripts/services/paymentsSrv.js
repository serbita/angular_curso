'use strict';

var myapp = angular.module('epantePagosApp')

myapp.factory('PaymentsSrv',function ($http,APISrv) {
	var factory = {};

  factory.list = function() {
    return APISrv.get('http://private-7cd9-serbita.apiary-mock.com/payments');
  };

	return factory;
});
