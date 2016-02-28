'use strict';

angular.module('wrs.contact', [])

    .controller('ContactCtrl', [function() {

    }])

    .controller('ImgGalleryCtrl', ['$scope', function($scope) {
        $scope.images = [
            {thumb: 'assets/img/picture_01.jpg', img: 'assets/img/picture_01.jpg', description: ''},
            {thumb: 'assets/img/picture_02.jpg', img: 'assets/img/picture_02.jpg', description: ''},
            {thumb: 'assets/img/picture_03.jpg', img: 'assets/img/picture_03.jpg', description: ''},
            {thumb: 'assets/img/picture_04.jpg', img: 'assets/img/picture_04.jpg', description: ''},
            {thumb: 'assets/img/picture_05.jpg', img: 'assets/img/picture_05.jpg', description: ''},
        ];
    }])

    .controller("GoogleMapsCtrl", ['$scope', 'uiGmapGoogleMapApi', '$window', function($scope, uiGmapGoogleMapApi, $window) {

        var lat = 47.805344;
        var long = 16.607099;
        var isDraggable = $window.innerWidth > 480 ? true : false;

        // uiGmapGoogleMapApi is a promise. The "then" callback function provides the google.maps object.
        uiGmapGoogleMapApi.then(function(maps) {

            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            $scope.map = {
                zoom: 14,   // How zoomed in you want the map to start at (always required)
                center: {   // The latitude and longitude to center the map (always required)
                    latitude: lat,
                    longitude: long
                },
                options: {
                    draggable: isDraggable,
                    mapTypeControl: false,
                    streetViewControl: false
                },
                styles: [
                    {"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},
                    {"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},
                    {"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
                    {"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},
                    {"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},
                    {"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},
                    {"featureType":"administrative.province","stylers":[{"visibility":"off"}]},
                    {"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},
                    {"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}
                ]
            };

            $scope.marker = {
                id: 0,
                coords: { latitude: lat, longitude: long }
            };
        });
    }]);