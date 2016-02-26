'use strict';

angular.module('wrs.routes', [
        'ngRoute',
        'wrs.home',
        'wrs.partners'
    ])

    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'components/home/homeView.html',
                controller: 'HomeCtrl'
            })
            .when('/en', {
                templateUrl: 'components/home/homeView.html',
                controller: 'HomeCtrl'
            })
            .when('/partners', {
                templateUrl: 'components/partners/partnersView.html',
                controller: 'PartnersCtrl'
            })
            .when('/contact', {
                templateUrl: 'components/contact/contactView.html',
                controller: 'ContactCtrl'
            })
            .otherwise({redirectTo: '/'});

        //$locationProvider.html5Mode(true);

    }]);