'use strict';

/**
 * @ngdoc function
 * @name epantePagosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the epantePagosApp
 */
 var myapp = angular.module('epantePagosApp')
 myapp.controller('TodoListCtrl', function ($scope) {

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