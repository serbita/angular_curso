'use strict';

var myapp = angular.module('epantePagosApp');
myapp.controller('UsersCtrl', function ($scope) {
	$scope.submitted = false;

	this.user = {};
	this.user.birthdate	= new Date(2015, 9, 22);
	this.user.name = '';
	this.user.provincia = '';
	this.user.gender = '';
	this.user.note = '';
	this.user.emailWithDomain = '';
	this.user.username = '';
	this.user.email = '';
	this.user.phone = '';
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
			alert('OK');
		} else{
			console.log('Invalid form');
		}
		$scope.submitted = true;
	};

    this.interacted = function(field) {
      return $scope.submitted || field.$dirty;
    };	

});
