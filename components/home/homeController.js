'use strict';

angular.module('wrs.home', [])

    .controller('HomeCtrl', ['$scope', '$window', '$location', '$translate',
        function($scope, $window, $location, $translate) {
            $scope.isDraggable = $window.innerWidth > 480 ? true : false;
        }
    ]);