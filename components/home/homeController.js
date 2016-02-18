'use strict';

angular.module('wrs.home', [])

.controller('HomeCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.isDraggable = $window.innerWidth > 480 ? true : false;
}]);