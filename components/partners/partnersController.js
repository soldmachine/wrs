'use strict';

angular.module('wrs.partners', [])

    .controller('PartnersCtrl', ['$scope', 'Countries', '$translate',
        function($scope, Countries, $translate) {
            $scope.translate = $translate;
            $scope.countries = Countries.query();
        }]
    );