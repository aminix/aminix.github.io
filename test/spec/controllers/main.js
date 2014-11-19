'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('resumeProjectApp'));

  var MainCtrl;
  var scope;
  var PlanetsInfo;
  var RangesInfo;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _PlanetsInfo_, _RangesInfo_) {
    scope = $rootScope.$new();
    PlanetsInfo = _PlanetsInfo_;
    RangesInfo = _RangesInfo_;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  describe('missionStarted', function () {
    it('should start in false and 0%', function () {
      expect(scope.utils.missionStarted).toBe(false);
      expect(scope.utils.percentageDiscovered).toBe(0);
      expect(scope.utils.range).toBe(RangesInfo['level_1']);
      expect(scope.utils.showLast).toBe(false);
    })
    it('should change to true when called "Start Mission"', function () {
      scope.startMission();
      expect(scope.utils.missionStarted).toBe(true);
    })
  })
  describe('clickOnPlanets', function () {
    describe('percentage behaviour', function () {
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
    describe('range behaviour', function () {
      it('should be the level when minimum value', function () {
        scope.handleRange(RangesInfo.level_2.min);
        expect(scope.utils.range).toBe(RangesInfo.level_2);
      })
      it('should be the level when max value', function () {
        scope.handleRange(RangesInfo.level_2.max);
        expect(scope.utils.range).toBe(RangesInfo.level_2);
      })
      it('should be the level when middle value', function () {
        var value = (RangesInfo.level_2.min + RangesInfo.level_2.max) / 2;
        scope.handleRange(value);
        expect(scope.utils.range).toBe(RangesInfo.level_2);
      })
    })
  })
  describe('finish game', function () {
    it('should show last planet when reached maximum score', function () {
      var planets = Object.keys(PlanetsInfo);
      planets.forEach(function (item) {
        if (item !== 'thanks'){
          scope.planetClicked(item);
        }
      })
      scope.closeNewRangeModal();
      expect(scope.utils.percentageDiscovered).toBe(99.9);
      expect(scope.utils.range).toBe(RangesInfo.level_5);
      expect(scope.utils.showLast).toBe(true);
    })
    it('should now show last planet if not all planets are clicked', function () {
      var planet = 'languagia';
      scope.planetClicked(planet);
      scope.closeNewRangeModal();
      expect(scope.utils.showLast).toBe(false);
    })
  })


});
