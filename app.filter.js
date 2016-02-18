angular.module('wrs.filter',[])

    .filter('removeHTTP', function () {
    return function (text) {
        return text.replace('http://', '');
    };
})