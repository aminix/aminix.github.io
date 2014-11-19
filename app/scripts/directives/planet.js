angular.module('resumeProjectApp')
  .directive('planet', function (PlanetsInfo) {
    return {
      template: function (elem, attr) {
        return '<div class="planet-wrapper">' +
        '<div class="planet rotateIn" ng-click="planetClicked('+ '\'' + attr.id + '\'' +')">' +
          '<div class="planet-shader"></div>' +
          '</div>' +
          '<span class="planet-name">'+ attr.planetName +'</span>' +
        '</div>'
      },
      replace: true,
      link: function (scope, elem, attr) {
        var audio = $("#planet-hover-audio")[0];
        $(elem).find('.planet').bind('mouseenter', (function() {
          audio.play();
        }));
        $(elem).find('.planet').bind('mouseleave', (function() {
          audio.pause();
          audio.currentTime = 0;
        }));
        $(elem).bind('click', function () {
          angular.element('.' + PlanetsInfo[attr.id].template).modal('show');

        })
      }
    }
  })