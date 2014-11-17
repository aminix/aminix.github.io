'use strict';

/**
 * @ngdoc function
 * @name resumeProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeProjectApp
 */
angular.module('resumeProjectApp')
  .controller('MainCtrl', function ($rootScope, $scope, PlanetsInfo, RangesInfo) {
    $scope.utils = {
      missionStarted: false,
      percentageDiscovered: 0,
      range: RangesInfo.level_1
    }
    var visited = {};

    $scope.startMission = function () {
      $scope.utils.missionStarted = true;
    }

    $scope.planetClicked = function (planetName) {
      if (!visited[planetName]) {
        visited[planetName] = true;
        //if all but the last 'Thanks' planet is clicked, the percentage is always 99.9
        if (Object.keys(visited).length === Object.keys(PlanetsInfo).length - 1) {
          $scope.utils.percentageDiscovered = 99.9;
        } else {
          $scope.utils.percentageDiscovered += PlanetsInfo[planetName].percentage;
        }
        $scope.handleRange($scope.utils.percentageDiscovered);
      }
    }

    $scope.handleRange = function (percentage) {
      if (percentage > $scope.utils.range.max) {
        $scope.utils.range = RangesInfo[$scope.utils.range.next];
      }
    }
  });
