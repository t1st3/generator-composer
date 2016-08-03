'use strict';

var generators = require('yeoman-generator');
var figlet = require('figlet');
var updateNotifier = require('update-notifier');
var pkg = require('../package.json');

module.exports = generators.Base.extend({
	constructor: function () {
		generators.Base.apply(this, arguments);
		var done = this.async();
		var notifier = updateNotifier({
			pkg: pkg
		});
		if (notifier.update) {
			notifier.notify();
		}

		figlet('yo composer', function (err, data) {
			if (err) {
				done(err);
			} else {
				console.log(data);
				done();
			}
		});
	},
	prompting: function () {
		return this.prompt([{
			type: 'input',
			name: 'githubAccount',
			message: 'What is your github account?'
		}, {
			type: 'input',
			name: 'projectName',
			message: 'Name of the Github repository (e.g. php-my-super-package)?'
		}, {
			type: 'input',
			name: 'objectName',
			message: 'Name of your main PHP class (e.g. mySuperPackage)?'
		}]).then(function (answers) {
			this.log('github account', answers.githubAccount);
			this.log('project name', answers.projectName);
			this.log('object name', answers.objectName);
			this.githubAccount = answers.githubAccount;
			this.projectName = answers.projectName;
			this.objectName = answers.objectName;
		}.bind(this));
	},
	writing: function () {
		this.mkdir('src');
		this.mkdir('src/' + this.githubAccount);
		this.mkdir('src/' + this.githubAccount + '/' + this.objectName);

		this.template(
			'src/_script.php',
			'src/' + this.githubAccount + '/' + this.objectName + '/' + this.objectName + '.php'
		);

		this.mkdir('tests');
		this.template('tests/_scriptTest.php', 'tests/' + this.objectName + 'Test.php');

		this.mkdir('example');

		this.mkdir('dist');
		this.mkdir('doc');
		this.mkdir('_lint');
		this.mkdir('_lint/tmp');

		this.template('_gruntfile.js', 'Gruntfile.js');
		this.template('_package.json', 'package.json');
		this.template('_composer.json', 'composer.json');
		this.template('_README.md', 'README.md');
		this.copy('gitignore', '.gitignore');
		this.copy('gitattributes', '.gitattributes');
		this.copy('travis.yml', '.travis.yml');
		this.template('_travis-ci.xml', 'travis-ci.xml');
		this.template('_phpunit.xml', 'phpunit.xml');

		this.copy('editorconfig', '.editorconfig');
	},
	install: function () {
		this.installDependencies({skipInstall: this.option('skip-install')});
	}
});
