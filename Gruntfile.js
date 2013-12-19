'use strict';

module.exports = function(grunt) {
    var dependencies = grunt.file.readJSON('dependencies.json');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['www/js/**/*.js'],
            options: {
                ignores: ['www/js/lib-external/**/*.js'],
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

        clean: {
            bower: ['./www/lib'],
            build: ['build']
        },

        bower: {
            install: {
                targetDir: './www/lib'
            }
        },

        'http-server': {
            local: {
                root: './www',
                port: 8080,
                host: 'localhost',
                showDir : true,
                autoIndex: true,
                runInBackground: false
            }
        },

        phonegap: {
            config: {
                platforms: ['ios'],
                plugins: dependencies.plugins
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
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-phonegap');
    grunt.loadNpmTasks('grunt-http-server');

    grunt.registerTask('default', ['watch:all']);
    grunt.registerTask('test', ['bower:install', 'jshint', 'karma:jasmine']);
    grunt.registerTask('build', ['clean:bower', 'clean:build', 'bower:install', 'phonegap:build']);
    grunt.registerTask('run:browser', ['clean:bower', 'bower:install', 'http-server:local']);
    grunt.registerTask('run:ios', ['clean:bower', 'clean:build', 'bower:install', 'phonegap:build', 'phonegap:run:ios']);

};