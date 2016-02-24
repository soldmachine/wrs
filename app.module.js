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
        'jkuri.gallery',
        'pascalprecht.translate'
    ])

    // Checks whether $location.path() and the variable viewLocation are equal (used for .navbar li.active>a)
    .controller('NavCtrl', ['$scope', '$location',
        function($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }]
    )
    .config(['uiGmapGoogleMapApiProvider',
        function(uiGmapGoogleMapApiProvider) {
            uiGmapGoogleMapApiProvider.configure({
                key: 'AIzaSyCaqgfhoNgq0_iZWU4vGrrV7ySUZYPmm9k',
                v: '3', //defaults to latest 3.X anyhow
                libraries: 'weather,geometry,visualization'
            });
        }]
    )
    .config(['$translateProvider',
        function ($translateProvider) {
            $translateProvider.useStaticFilesLoader({
                prefix: 'assets/i18n/',
                suffix: '.json'
            });
            $translateProvider.use('de_DE');
        }]
    )
    .controller('LangCtrl', ['$scope', '$translate',
        function ($scope, $translate) {
            $scope.translate = $translate;
            $scope.switchLanguage = function(key) {
                $translate.use(key);
            };
        }]
    );
