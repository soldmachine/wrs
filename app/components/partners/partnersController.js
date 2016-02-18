'use strict';

angular.module('wrs.partners', [])

    .controller('PartnersCtrl', ['$scope', 'Countries',
      function($scope, Countries) {
        $scope.countries = Countries.query();
      }]);