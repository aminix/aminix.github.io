'use strict';

/**
 * @ngdoc function
 * @name resumeProjectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the resumeProjectApp
 */
angular.module('resumeProjectApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
