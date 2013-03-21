/*
 * grunt-comment-media-queries
 * https://github.com/stephband/grunt.comment-media-queries
 */

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('rem-to-px', 'Replace all rem values with px.', function() {

		// Iterate over all specified file groups.
		this.files.forEach(function(f) {
			// Concat specified files.
			var src = f.src.filter(function(filepath) {
				// Warn on and remove invalid source files (if nonull was set).
				if (!grunt.file.exists(filepath)) {
					grunt.log.warn('Source file "' + filepath + '" not found.');
					return false;
				} else {
					return true;
				}
			}).map(function(filepath) {
				var file = grunt.file.read(filepath);

				return file.replace(/([+-]?\d*\.?\d+)\s*rem/g, function($0, $1, $2) {
						var rem = parseFloat($1),
						    px = Math.round(rem * 16);

						return px + 'px';
				});
			}).join('\n');

			// Write the destination file.
			grunt.file.write(f.dest, src);

			// Print a success message.
			grunt.log.writeln('File "' + f.dest + '" created.');
		});
	});
};
