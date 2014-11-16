'use strict';

/**
 * @ngdoc function
 * @name resumeProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeProjectApp
 */
angular.module('resumeProjectApp')
  .controller('MainCtrl', function ($rootScope, $scope, PlanetsInfo) {
    $scope.utils = {
      missionStarted: false,
      percentageDiscovered: 0
    }
    var visited = {};

    $scope.startMission = function () {
      $scope.utils.missionStarted = true;
    }

    $scope.planetClicked = function (planetName) {
      if (!visited[planetName]) {
        $scope.utils.percentageDiscovered += PlanetsInfo[planetName].percentage;
        // when the last visible planet is clicked take percentage to 99.99, not 99 or 100
        // just for fun :P
        if ($scope.utils.percentageDiscovered === 99) {
          $scope.utils.percentageDiscovered += 0.9;
        }
        visited[planetName] = true;
      }
    }
  });
