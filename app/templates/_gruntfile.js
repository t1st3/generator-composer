'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
    shell: {
			installComposer: {
				command: 'curl -sS https://getcomposer.org/installer | php',
				options: {
					stdout: true
				}
			},
			installPhpdoc: {
				command: 'php composer.phar require "phpdocumentor/phpdocumentor:2.*"',
				options: {
					stdout: true
				}
			},
			installPhpUnit: {
				command: 'php composer.phar require "phpunit/phpunit:3.*"',
				options: {
					stdout: true
				}
			}
		},
		phpunit: {
			classes: {
				dir: 'tests/php/'
			},
			options: {
				bin: 'vendor/bin/phpunit',
				bootstrap: 'tests/php/phpunit.php',
				colors: true
			}
		},
		phplint: {
			options: {
				phpCmd: "/usr/bin/php", // Or "c:\EasyPHP-5.3.8.1\PHP.exe"
				phpArgs: {
					"-l": null
				},
				spawnLimit: 10,
				swapPath: "lint/tmp"
			},
			good: ["src/*.php"],
			bad: ["src/*.php"]
    }
  });

	// Load tasks
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-phpunit');
	grunt.loadNpmTasks('grunt-phplint');

	// Register tasks
	grunt.registerTask('init', [
		'shell:installComposer',
		'shell:installPhpdoc',
		'shell:installPhpUnit'
	]);
	
	grunt.registerTask('build', [
		'phplint:good'
	]);
	
	grunt.registerTask('serve', [
		'build'
	]);
};