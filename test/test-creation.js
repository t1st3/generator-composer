/* global describe,it,before */
'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('yo composer:app', function () {
	before(function (done) {
		helpers.run(path.join(__dirname, '../app'))
		.inDir(path.join(__dirname, '../../tmp'))
		.withOptions({
			'skip-install': true
		})
		.withPrompts({
			projectName: 'php-my-super-package',
			githubAccount: 'myGitAccount',
			objectName: 'mySuperPackage'
		})
		.on('end', done);
	});

	it('creates files', function () {
		assert.file([
			'composer.json',
			'README.md',
			'package.json',
			'.editorconfig',
			'.gitattributes',
			'.gitignore',
			'Gruntfile.js',
			'phpunit.xml',
			'travis-ci.xml',
			'.travis.yml'
		]);
	});
});
