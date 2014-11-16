angular.module('resumeProjectApp')
  .directive('startAudio', function () {
    return {
      link: function (scope, elem, attrs) {
        var audio = $("#start-mission-audio")[0];
        $(elem).bind('click', (function() {
          audio.play();
        }));
      }
    }
  })