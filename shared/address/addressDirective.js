'use strict';

angular.module('wrs.address.directive', [])

    .directive('wrsAddress',
        function() {
            return {
                restrict: 'E',
                templateUrl: 'shared/address/addressView.html'
            };
        }
    )
    .directive('wrsMailTel',
        function() {
            return {
                restrict: 'E',
                templateUrl: 'shared/address/mailTelView.html',
                scope: {
                    hideWeb: '=hideWeb',
                    hideIcons: '=hideIcons'
                },
            };
        }
    );
