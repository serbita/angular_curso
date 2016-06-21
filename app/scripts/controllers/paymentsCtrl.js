'use strict';

var myapp = angular.module('epantePagosApp')

myapp.controller('PaymentsCtrl', ['$scope','PaymentsSrv',function ($scope, PaymentsSrv) {
	var self = this;
	self.payments = [];

	self.userName = "Horacio Alberto Mancilla";
	self.barrio = "Barrio La Pancha";

	self.list = function(){
            PaymentsSrv.list()
                  .then(
                               function(d) {
                                    self.payments = d;
                               },
                                function(errResponse){
                                    console.error('Error while fetching Currencies');
                                }
                       );
    };

    this.list();

}])
