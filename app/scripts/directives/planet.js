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
      replace: true
    }
  })