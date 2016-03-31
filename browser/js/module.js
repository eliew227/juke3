'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from ' + fromState + ' to ' + toState + ':', error);
  });
});

juke.config(function($urlRouterProvider, $locationProvider){ 
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('/', '/albums');
    $urlRouterProvider.when('/artists/:artistId', '/artists/:artistId/albums');

});
