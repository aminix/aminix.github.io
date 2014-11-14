angular.module('resumeProjectApp')
  .directive('planet', function () {
    return {
      template: function (elem, attr) {
        return '<div class="planet-wrapper">' +
        '<div class="planet" ng-click="planetClicked('+ '\'' + attr.id + '\'' +')">' +
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
        }));
      }
    }
  })