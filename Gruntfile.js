'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['www/js/**/*.js'],
            options: {
                globals: {
                    angular: false,
                    module: false
                }
            }
        },

        karma: {
            jasmine: {
                configFile: 'test/jasmine.conf.js'
            }
        },

        watch: {
            all: {
                files: ['Gruntfile.js', 'www/js/**/*.js', 'test/jasmine/**/*.js'],
                tasks: ['test']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['watch:all']);
    grunt.registerTask('test', ['jshint', 'karma:jasmine']);

};