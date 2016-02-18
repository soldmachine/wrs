'use strict';

// Directory Structure according to https://scotch.io/tutorials/angularjs-best-practices-directory-structure

// Declare app level module which depends on views, and components
angular.module('wrs', [
        'wrs.routes',
        'wrs.home',
        'wrs.partners',
        'wrs.partnersService',
        'wrs.contact',
        'wrs.filter',
        'uiGmapgoogle-maps',
        'jkuri.gallery'
    ])

    // Checks whether $location.path() and the variable viewLocation are equal (used for .navbar li.active>a)
    .controller('NavCtrl', ['$scope', '$location',
        function($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }])

    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyCaqgfhoNgq0_iZWU4vGrrV7ySUZYPmm9k',
            v: '3', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
    });
