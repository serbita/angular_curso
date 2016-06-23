'use strict';

var myapp = angular.module('epantePagosApp')

myapp.controller('PaymentsCtrl', ['$scope','PaymentsSrv','$stateParams',function ($scope, PaymentsSrv,$stateParams) {
	var self = this;
	self.payments = [];

	self.userName = "Horacio Alberto Mancilla";
	self.barrio = "Barrio La Pancha";

    //console.log("codUser:"+$stateParams.codUser);
	self.list = function(){
        PaymentsSrv.getPaymentsByUser($stateParams.codUser).then(
         function(d) {
              self.payments = d;
         },
         function(errResponse){
              console.error('Error while fetching Currencies');
         }
        );
    };

    self.list();

}])
