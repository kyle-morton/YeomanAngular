'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    //get todos from clients local storage
    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore || [];
    $scope.todo = "";
    
    //watch method keeps local storage in sync
    $scope.$watch('todos', function(){
      localStorageService.set('todos', $scope.todos)
    }, true);
    
    $scope.addTodo = function(){
      //if inputted todo valid and not duplicate, push to array
      if ($scope.todo != null && ($.inArray($scope.todo, $scope.todos) == -1)){
        $scope.todos.push($scope.todo);
        $scope.todo = '';
      }
    };
    
    $scope.removeTodo = function(index){
      console.log("Removing: " + index);
      $scope.todos.splice(index, 1);
    }
    
  });
