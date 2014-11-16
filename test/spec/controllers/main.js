'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeProjectApp'));

  var MainCtrl,
    scope,
    PlanetsInfo;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _PlanetsInfo_) {
    scope = $rootScope.$new();
    PlanetsInfo = _PlanetsInfo_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe('missionStarted', function () {
    it('should start in false and 0%', function () {
      expect(scope.utils.missionStarted).toBe(false);
      expect(scope.utils.percentageDiscovered).toBe(0);
    })
    it('should change to true when called "Start Mission"', function () {
      scope.startMission();
      expect(scope.utils.missionStarted).toBe(true);
    })
  })
  describe('clickOnPlanets', function () {
    it('should add planet percentage to percentage discovered', function () {
      var planet = 'languagia';
      scope.planetClicked(planet);
      expect(scope.utils.percentageDiscovered).toBe(PlanetsInfo[planet].percentage);
    })
    it('should not sum again if same planet is clicked again', function () {
      var planet = 'languagia';
      scope.planetClicked(planet);
      scope.planetClicked(planet);
      expect(scope.utils.percentageDiscovered).toBe(PlanetsInfo[planet].percentage);
    })
    it('should end percentage in 99.9% when all planets clicked except Thanks', function () {
      var planets = Object.keys(PlanetsInfo);
      planets.forEach(function (item) {
        if (item !== 'thanks'){
          scope.planetClicked(item);
        }
      })
      expect(scope.utils.percentageDiscovered).toBe(99.9);
    })
    it('should end percentage in 100% when everything is clicked', function () {
      var planets = Object.keys(PlanetsInfo);
      planets.forEach(function (item) {
        scope.planetClicked(item);
      })
      expect(scope.utils.percentageDiscovered).toBe(100);
    })
  })



});
