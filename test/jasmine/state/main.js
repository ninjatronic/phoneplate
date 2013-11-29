describe('app.state.main', function() {
    var state;

    beforeEach(function() {
        module('app.state');
        inject(['app.state.main', function(mainState) {
            state = mainState;
        }]);
    });

    it('should be defined', function() {
        expect(state).toBeDefined();
    });

    it('should have url \'/\'', function() {
        expect(state.url).toBe('/');
    });

    it('should have templateUrl \'html/main.html\'', function() {
        expect(state.templateUrl).toBe('html/main.html');
    });

    it('should have controller \'app.control.main\'', function() {
        expect(state.controller).toBe('app.control.main');
    });

});