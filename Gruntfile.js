'use strict';

module.exports = function (grunt) {

    grunt.config.init({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'scripts/',
                        src: ['*.js'],
                        dest: 'dist/',
                        ext: '.js'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('default', 'babel');
};
