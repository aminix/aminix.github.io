"use strict";
angular.module("resumeProjectApp", ["ngAnimate", "ngCookies", "ngResource", "ngRoute", "ngSanitize", "ngTouch"]).config(["$routeProvider", function (a) {
  a.when("/", {templateUrl: "views/main.html"}).otherwise({redirectTo: "/"})
}]), angular.module("resumeProjectApp").directive("startAudio", function () {
  return{link: function (a, b) {
    var c = $("#start-mission-audio")[0];
    $(b).bind("click", function () {
      c.play()
    })
  }}
}), angular.module("resumeProjectApp").directive("planet", ["PlanetsInfo", function (a) {
  return{template: function (a, b) {
    return'<div class="planet-wrapper"><div class="planet rotateIn" ng-click="planetClicked(\'' + b.id + '\')"><div class="planet-shader"></div></div><span class="planet-name">' + b.planetName + "</span></div>"
  }, replace: !0, link: function (b, c, d) {
    var e = $("#planet-hover-audio")[0];
    $(c).find(".planet").bind("mouseenter", function () {
      e.play()
    }), $(c).find(".planet").bind("mouseleave", function () {
      e.pause(), e.currentTime = 0
    }), $(c).bind("click", function () {
      angular.element("." + a[d.id].template).modal("show")
    })
  }}
}]), angular.module("resumeProjectApp").factory("PlanetsInfo", function () {
  return{"work-experiencitas": {name: "Work Experiencitas", percentage: 35, template: "work-experiencitas-modal"}, educatia: {name: "Educatia", percentage: 22, template: "educatia-modal"}, "tecnicus-knowledge": {name: "Tecnicus Knowledge", percentage: 17, template: "tecnicus-knowledge-modal"}, languagia: {name: "Languagia", percentage: 6, template: "languagia-modal"}, contactia: {name: "Contactia", percentage: 6, template: "contactia-modal"}, projectus: {name: "Projectus", percentage: 10, template: "projectus-modal"}, hobbiens: {name: "Hobbiens", percentage: 3, template: "hobbiens-modal"}, thanks: {name: "Thanks", percentage: .1, template: "thanks-modal"}}
}), angular.module("resumeProjectApp").factory("RangesInfo", function () {
  return{level_1: {name: "Amateur Explorer", min: 0, max: 15, next: "level_2", img: "images/medal0.3c94e301.png"}, level_2: {name: "Ambitious Explorer", min: 16, max: 30, next: "level_3", img: "images/medal1.eb7d5713.png"}, level_3: {name: "Freelance Astronaut", min: 31, max: 60, next: "level_4", img: "images/medal2.bea66e21.png"}, level_4: {name: "Space Hunter", min: 61, max: 96, next: "level_5", img: "images/medal3.be0b5b3f.png"}, level_5: {name: "Elite Discoverer", min: 97, max: 99.9, next: "level_6", img: "images/medal4.e664bb19.png"}, level_6: {name: "Galaxy Owner", min: 100, max: 1 / 0, img: "images/medal5.757b4cf7.png"}}
}), angular.module("resumeProjectApp").controller("MainCtrl", ["$rootScope", "$scope", "PlanetsInfo", "RangesInfo", function (a, b, c, d) {
  b.utils = {missionStarted: !1, percentageDiscovered: 0, range: d.level_1, showLast: !1};
  var e = {}, f = !1;
  b.startMission = function () {
    b.utils.missionStarted = !0
  }, b.planetClicked = function (a) {
    e[a] || (e[a] = !0, Object.keys(e).length === Object.keys(c).length - 1 ? b.utils.percentageDiscovered = 99.9 : b.utils.percentageDiscovered += c[a].percentage, b.handleRange(b.utils.percentageDiscovered))
  }, b.handleRange = function (a) {
    a > b.utils.range.max && (b.utils.range = d[b.utils.range.next], f = !0)
  }, b.showNewRangeModal = function () {
    f && (angular.element(".new-range-modal").modal("show"), f = !1)
  }, b.closeNewRangeModal = function () {
    b.utils.range == d.level_5 && 99.9 == b.utils.percentageDiscovered && (b.utils.showLast = !0)
  }
}]);