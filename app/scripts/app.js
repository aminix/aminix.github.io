'use strict';

/**
 * @ngdoc overview
 * @name resumeProjectApp
 * @description
 * # resumeProjectApp
 *
 * Main module of the application.
 */
angular
  .module('resumeProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
