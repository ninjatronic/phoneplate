(function () {
    'use strict';

    angular
        .module('app.state', ['ui.router'])
        .config([

            '$urlRouterProvider', '$stateProvider',

            'app.state.main',

            function (
                $urlRouterProvider, $stateProvider,

                mainState) {

                $urlRouterProvider.otherwise('/');

                $stateProvider.state(mainState.name, mainState);

            }])
        .run([function () {
        }]);
})();