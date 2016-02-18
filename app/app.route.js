'use strict';

angular.module('wrs.routes', [
        'ngRoute',
        'wrs.home',
        'wrs.partners'
    ])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'components/home/homeView.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/partners', {
            templateUrl: 'components/partners/partnersView.html',
            controller: 'PartnersCtrl'
        });
        $routeProvider.when('/contact', {
            templateUrl: 'components/contact/contactView.html',
            controller: 'ContactCtrl'
        });
        $routeProvider.otherwise({redirectTo: '/'});
    }]);