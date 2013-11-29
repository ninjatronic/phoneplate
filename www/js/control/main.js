(function () {
    'use strict';

    angular
        .module('app.control')
        .controller('app.control.main', [
            '$scope',
            function ($scope) {

                $scope.title = 'Phoneplate';
                $scope.subtitle = 'An AngularJS and Phonegap Boilerplate';

            }]);
})();