'use strict';

/**
 * @ngdoc function
 * @name cursoangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cursoangularApp
 */
 var myapp = angular.module('cursoangularApp')
 myapp.controller('MainCtrl', function ($scope) {
   $scope.nombre="pera";

   $scope.todos=[
     {text:'Learn AngularJs',done:true},
     {text:'Build an app',done:false}
    ];

    $scope.addTodo = function(){
      $scope.todos.push({text:$scope.formTodoText,done:false})
      $scope.formTodoText = '';
    };

    $scope.getTotalTodos = function(){
      return $scope.todos.length;
    };

    $scope.clearCompleted = function(){
      $scope.todos = _.filter($scope.todos, function(todo){
        return !todo.done;
      }
    )};
  })

 .controller('LoginCtrl', function ($scope) {
   $scope.nombre="pepe";
 });
