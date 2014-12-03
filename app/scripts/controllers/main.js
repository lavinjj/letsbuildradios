'use strict';

angular.module('letsbuildradios')
  .controller('MainCtrl', function ($scope, $window, Posts, Config, $routeParams, progressbar) {

    Config.make();

    $scope.$on(
        "$routeChangeSuccess",
        function( $currentRoute, $previousRoute ){

            if( $routeParams.postTitle ){
              progressbar.start();
              Posts.getBySlug($routeParams.postTitle, function(data){
                $scope.post = data;
                progressbar.complete();
                $window.document.title = $scope.post.title + " - " + $scope.config.title;
              });
            } else {

              $window.document.title = $scope.config.title + " - " + $scope.config.description;

              Posts.getPosts(function(data){
                $scope.posts = data;
              });
            }
        }
    );

  });
