'use strict';

var myapp = angular.module('epantePagosApp')

myapp.controller('PaymentsCtrl', ['$scope','PaymentsSrv','$stateParams',function ($scope, PaymentsSrv,$stateParams) {
	var self = this;
	self.payments = [];

	self.userName = "";
	self.barrio = "";

    //console.log("codUser:"+$stateParams.codUser);
	self.list = function(){
        PaymentsSrv.getPaymentsByUser($stateParams.codUser).then(
         function(d) {
                self.payments = d.payments;
                self.userName = d.userName;
                self.barrio = d.barrio
         },
         function(errResponse){
              console.error('Error while fetching Currencies');
         }
        );
    };

    self.list();
/*
    this.getStatusClass = function(status){
        var res = false;
        console.log(status);
        if (status == 'created') res = true;
        return res;
    };
*/

}]);





