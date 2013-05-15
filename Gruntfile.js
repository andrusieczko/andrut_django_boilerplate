/*global module:false*/
module.exports = function(grunt) {
	'use strict';
	var utils = require('./grunt/utils')(grunt);

	// Project configuration.
	grunt.initConfig({
		project: grunt.file.readJSON('package.json'),
		files: {
			frontend: utils.noVendorFiles(['static/**/*.js', 'tests/frontend/**/*.js'])
		},
		meta: {
			banner: '<file_template:grunt/banner>'
		},
		mocha: {
			index: ['tests/frontend/index.html']
		},
		watch: {
			files: '<%= files.frontend %>',
			tasks: 'quality'
		},
		/* Building */
		uglify: {},
		complexity: grunt.file.readJSON('grunt/complexity.json'),
		jshint: grunt.file.readJSON('grunt/jshint.json'),
		shell: grunt.file.readJSON('grunt/shell.json')
	});

	// Mocha + PhantomJS runner
	grunt.loadNpmTasks('grunt-mocha');
	// JS code complexity
	grunt.loadNpmTasks('grunt-complexity');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-shell');

	// Default tasks
	grunt.registerTask('quality', ['jshint', 'mocha', 'complexity', 'shell:runTests']);
	//grunt.registerTask('build_nolint', 'requirejs');

	// Build
	grunt.registerTask('build', ['quality', /*'build_nolint'*/]);
	grunt.registerTask('default', 'build');

};
