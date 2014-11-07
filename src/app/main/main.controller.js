'use strict';

angular.module('podcastKali')
  .controller('MainCtrl', function ($scope, Restangular) {
    $scope.loading = true;
    var pd = Restangular.all('podcasts');
    pd.getList().then(function (podcasts) {
      // body...
      $scope.loading = false;
      $scope.podcasts = podcasts.map(function (podcast) {
        podcast.config = {itemsPerPage: 4};
        return podcast;
      });
    });
  });
