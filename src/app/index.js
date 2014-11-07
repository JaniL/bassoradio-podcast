'use strict';

angular.module('podcastKali', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'angular-table'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
  .config(function (RestangularProvider) {
  	// body...
  	RestangularProvider.setBaseUrl('http://api.basso.fi/v1/');
  	RestangularProvider.setRequestSuffix('.json');
  	RestangularProvider.setDefaultHttpFields({cache: true});
  })
;
