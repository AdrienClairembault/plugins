
'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:DeveloperdocsCtrl
 * @description
 * # DeveloperdocsCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
   .controller('DeveloperGuidesCtrl', function ($rootScope, $stateParams) {
      var pages = [{
         'filename': 'oauth2',
         'text': 'API'
      }];

      $('pre code').each(function(i, block) {
         hljs.highlightBlock(block);
      });

      $rootScope.scrollModeLinks = [];
      for (var n in pages) {
         $rootScope.scrollModeLinks.push({
            text: pages[n].text
         });
      }

      console.log($stateParams);
   });
