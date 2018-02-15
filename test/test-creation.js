/* global describe,it,before */
'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('yo composer:app', () => {
	before(done => {
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

	it('creates files', () => {
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
