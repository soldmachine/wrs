'use strict';

/* Services */

angular.module('wrs.partnersService', ['ngResource'])

    .factory('Countries', ['$resource',
        function($resource){
            return $resource('../../../assets/data/partners.json', {}, {
                query: {method:'GET', params:{}, isArray:true}
            });
        }]);