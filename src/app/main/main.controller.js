'use strict';

angular.module('podcastKali')
  .controller('MainCtrl', function ($scope, Restangular) {
    $scope.loading = true;
    $scope.position = 0;
    $scope.duration = 0;
    $scope.nytSoi = null;
    // $scope.sm = soundManager.createSound();
    var pd = Restangular.all('podcasts');
    pd.getList().then(function (podcasts) {
      // body...
      $scope.loading = false;
      $scope.podcasts = podcasts.map(function (podcast) {
        podcast.config = {itemsPerPage: 4};
        return podcast;
      });

      $scope.playPodcast = function(podcast) {
        soundManager.stopAll();

        var podcastSM = soundManager.getSoundById(podcast.broadcastId);

        console.log("podcast soimaan" + podcast);

        if (podcastSM != null) {
          $scope.nytSoi = podcast.showName;
          podcastSM.resume();
        } else {
          soundManager.createSound({
            id: podcast.broadcastId,
            url: podcast.mediaUrl,
            autoPlay: true,
            whileplaying: function() {
              console.log("jou dudes");
              console.log($scope);
              $scope.position = this.position;
              $scope.duration = this.duration;
            }
          });
        }
        // $scope.sm.play();
      }
    });
  });
