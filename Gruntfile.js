'use strict';

module.exports = function (grunt) {

    grunt.config.init({
        watch: {
            scripts: {
                files: 'scripts/*.js',
                tasks: 'babel'
            }
        },
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
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['babel', 'watch']);
};
