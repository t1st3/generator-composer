'use strict';
module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    shell: {
			installComposer: {
				command: 'curl -sS https://getcomposer.org/installer | php',
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
    },
		version: {
			php: {
				options: {
					prefix: '@version\\s*'
				},
				src: ['src/**/*.php']
			},
			json: {
				options: {
					prefix: '"version":\\s"*'
				},
				src: ['composer.json']
			}
		}
  });

	// Load tasks
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-phpunit');
	grunt.loadNpmTasks('grunt-phplint');
	grunt.loadNpmTasks("grunt-version");

	// Register tasks
	grunt.registerTask('init', [
		'shell:installComposer'
	]);
	
	grunt.registerTask('build', [
		'version:php',
		'version:json',
		'phplint:good',
		'phpunit',
		'shell:phpdoc',
		'shell:phpcpd'
		
	]);
	
	grunt.registerTask('serve', [
		'build'
	]);
};