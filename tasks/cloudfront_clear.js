/*
 * grunt-cloudfront-clear
 * https://github.com/RabbleApp/grunt-cloudfront-clear
 *
 * Copyright (c) 2013 Thobias Bergström
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var invalidate = require('invalidatejs');

  grunt.registerMultiTask('cloudfront_clear', 'Invalidate CloudFront cache', function() {
    var config = this.data,
        done = this.async();

    invalidate(config, function (error, statusCode, body) {
      if (error) {
        grunt.log.error(JSON.stringify(error));
        grunt.fail.warn(JSON.stringify(body) || 'CloudFront invalidation failed');
      }
      grunt.log.verbose.writeln(JSON.stringify(body));
      grunt.log.ok('Invalidation sent!');
      done(JSON.stringify(body));
    });

  });

};
