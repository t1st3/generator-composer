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
			},
			installCopyPasteDetector: {
				command: 'php composer.phar require "sebastian/phpcpd:2.*"',
				options: {
					stdout: true
				}
			},
			phpdoc: {
				command: 'vendor/bin/phpdoc.php -d src/<%= githubAccount %>/<%= objectName %>/ -t doc',
				options: {
					stdout: true
				}
			},
			phpcpd: {
				command: 'vendor/bin/phpcpd src/',
				options: {
					stdout: true
				}
			}
		},
		phpunit: {
			classes: {
				dir: 'tests/'
			},
			options: {
				bin: 'vendor/bin/phpunit',
				//bootstrap: 'tests/php/phpunit.php',
				colors: true,
				configuration: 'phpunit.xml'
			}
		},
		phplint: {
			options: {
				phpCmd: "/usr/bin/php", // Or "c:\EasyPHP-5.3.8.1\PHP.exe"
				phpArgs: {
					"-l": null
				},
				spawnLimit: 10,
				swapPath: "_lint/tmp"
			},
			good: ["src/<%= githubAccount %>/<%= objectName %>/*.php"],
			bad: ["src/<%= githubAccount %>/<%= objectName %>/*.php"]
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
		'shell:installPhpUnit',
		'shell:installCopyPasteDetector'
	]);
	
	grunt.registerTask('build', [
		'phplint:good',
		'phpunit',
		'shell:phpdoc',
		'shell:phpcpd'
	]);
	
	grunt.registerTask('serve', [
		'build'
	]);
};