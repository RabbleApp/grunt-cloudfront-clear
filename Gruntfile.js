/*
 * grunt-cloudfront-clear
 * https://github.com/RabbleApp/grunt-cloudfront-clear
 *
 * Copyright (c) 2013 Thobias Bergström
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
        //'<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    cloudfront_clear: {
      index: {
        resourcePaths: ["/index.html"],
        secret_key: "AWS secret",
        access_key: "AWS key",
        dist: "CloudFront Distribution"
      }
    }

    // Unit tests.
    // nodeunit: {
    //   tests: ['test/*_test.js'],
    // },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  //grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  //grunt.registerTask('test', ['clean', 'cloudfront_clear', 'nodeunit']);
  grunt.registerTask('test', ['clean', 'cloudfront_clear:index']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
