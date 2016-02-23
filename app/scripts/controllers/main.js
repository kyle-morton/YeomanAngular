'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.todo = "";
    
    $scope.addTodo = function(){
      console.log("ScopeTodo: " + $scope.todo != null);
      console.log("In array: " + $.inArray($scope.todo, $scope.todos));
      if ($scope.todo != null && ($.inArray($scope.todo, $scope.todos) == -1)){
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      }
    }
  });
