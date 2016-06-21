'use strict';

var myapp = angular.module('epantePagosApp')

myapp.controller('PaymentsCtrl', function ($scope) {
	this.payments=[];
	this.list=function(){
		payments = [
			{"_id":"asdfa3434","date":"12/12/2016","month":"06","year":"2016","status":"approved"},
			{"_id":"asas","date":"12/12/2016","month":"05","year":"2016","status":"rejected"},
		]
	};
})
