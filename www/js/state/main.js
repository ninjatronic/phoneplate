(function () {
    'use strict';

    angular
        .module('app.state')
        .constant('app.state.main', {
            url: '/',
            templateUrl: 'html/main.html',
            controller: 'app.control.main',
            name: 'main'
        });
})();