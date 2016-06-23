'use strict';

var myapp = angular.module('epantePagosApp')

myapp.factory('PaymentsSrv',function ($http,APISrv) {
	var factory = {};

  factory.list = function () {
     return APISrv.get('http://private-7cd9-serbita.apiary-mock.com/payments')
          .then(function (res) {                        
               return res.data.payments;
          },
          function () {
              console.error('albums retrieval failed.');
              return "error";
          });
  };

  factory.getPaymentsByUser = function (codUser) {
     return APISrv.get('http://private-7cd9-serbita.apiary-mock.com/payments?codUser='+codUser)
          .then(function (res) {                        
               return res.data.payments;
          },
          function () {
              console.error('albums retrieval failed.');
              return "error";
          });
  };

	return factory;
});
