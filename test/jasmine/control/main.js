describe('app.control.main', function() {

    var $controller;
    var $scope;

    beforeEach(function() {
        module('app.control');
        inject(function($injector) {

            $scope = $injector.get('$rootScope').$new();

            $controller = $injector.get('$controller')('app.control.main', {$scope: $scope})
        });
    });

    it('should be defined', function() {
        expect($controller).toBeDefined();
    });

    it('should expose \'Phoneplate\' on \'$scope.title\'', function() {
        expect($scope.title).toBe('Phoneplate');
    });

    it('should expose \'An AngularJS and Phonegap Boilerplate\' on \'$scope.subtitle\'', function() {
        expect($scope.subtitle).toBe('An AngularJS and Phonegap Boilerplate');
    });
});