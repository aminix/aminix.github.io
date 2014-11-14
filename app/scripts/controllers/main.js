'use strict';

/**
 * @ngdoc function
 * @name resumeProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeProjectApp
 */
angular.module('resumeProjectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.utils = {
      missionStarted: false
    }

    $scope.startMission = function () {
      $scope.utils.missionStarted = true;
      angular.element('#start-mission-audio')[0].play();
    }

    $scope.planetClicked = function (planetName) {
      console.log('lala', planetName)
    }
  });
