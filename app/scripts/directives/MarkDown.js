'use strict';

angular.module('letsbuildradios')
  .directive('markdown', function ($http) {
    var converter = new Showdown.converter();
    return {
      restrict: 'A',
      scope: { link:'@' },
      link: function (scope, element, attrs) {
        attrs.$observe('link',function(link){
          if(link){
            $http.get('/posts/files/' + link).success(function(response){
              var htmlText = converter.makeHtml(response);
              element.html(htmlText);
            });
          }
        });
      }
    };
  });
