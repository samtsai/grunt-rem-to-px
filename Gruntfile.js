/*
 * grunt-flattenmedia
 * https://github.com/stephband/grunt.flattenmedia
 *
 * Copyright (c) 2013 stephband
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    "rem-to-px": {
      default_options: {
        options: {
          path_images: 'test/'
        },

        files: {
          'tmp/test_output.css': ['test/test.css']
        }
      }
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('default', ['clean', 'rem-to-px']);
};