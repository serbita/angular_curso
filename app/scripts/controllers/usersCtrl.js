'use strict';

var myapp = angular.module('epantePagosApp')
myapp.controller('UsersCtrl', function ($scope) {
	$scope.submitted = false;

	this.user = {};
	this.user.birthdate	= new Date(2015, 9, 22);
	this.user.name = '';
	this.user.provincia = 'cordoba';
	this.user.gender = 'male';
	this.user.note = 'Esta es una nota';
	this.user.emailWithDomain = 'ser@serbita.com';
	this.user.username = 'serbita';
	this.user.email = 'ser@ser.com';
	this.user.phone = "(111)111-1111";
	this.user.stateId = null;
	this.user.states = [
      {id: '1', name: 'Cordoba'},
      {id: '2', name: 'Mendoza'},
      {id: '3', name: 'San Luis'}
    ];
	this.user.agree = false;

	this.submitForm = function() {
		// check to make sure the form is completely valid
		if ($scope.userForm.$valid) {
			console.log('Valid form');
		} else{
			console.log('Invalid form');
		}
		$scope.submitted = true;
	};

});
