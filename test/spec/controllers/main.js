'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeProjectApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe('missionStarted', function () {
    it('should start in  false', function () {
      expect(scope.utils.missionStarted).toBe(false);
    })
    it('should change to true when called "Start Mission"', function () {
      scope.startMission();
      expect(scope.utils.missionStarted).toBe(true);
    })
  })



});
