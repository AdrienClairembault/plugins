'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
   .controller('NavCtrl', ['$scope', '$mdSidenav', '$rootScope', '$state',
      function($scope, $mdSidenav, $rootScope, $state) {

         $scope.toggleNavBar = function() {
            $mdSidenav("side-menu").toggle();
         };

         $scope.closeNavBar = function() {
            $mdSidenav("side-menu").close();
         };

         $rootScope.$on('$stateChangeStart', function() {
            $scope.closeNavBar();
         });

         $scope.$on('$stateChangeStart', function(event, toState, toParams) {
            var jqueryWindow = $(window);
            var sidebar = $('.sidebar');
            var main = $('.main');
            
            if (toState.name == 'developerguides') {
               jqueryWindow.scroll(function() {
                  var h = jqueryWindow.scrollTop();
                  if (h > 370 && !sidebar.hasClass('scrolling-mode')) {
                     sidebar.addClass('scrolling-mode');
                     main.addClass('scrolling-mode');
                  } else if (h <= 370 && sidebar.hasClass('scrolling-mode')) {
                     sidebar.removeClass('scrolling-mode')
                     main.removeClass('scrolling-mode');
                  }
               });
            } else {
               jqueryWindow.off('scroll');
               if (sidebar.hasClass('scrolling-mode')) {
                  sidebar.removeClass('scrolling-mode');
                  main.removeClass('scrolling-mode');
               }
            }
         });
      }
   ]);