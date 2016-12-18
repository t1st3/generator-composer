'use strict';

var generators = require('yeoman-generator');
var figlet = require('figlet');
var updateNotifier = require('update-notifier');
var pkg = require('../package.json');

module.exports = class extends generators {
	constructor(args, opts) {
		super(args, opts);
		this.res = {};
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
	}
	prompting() {
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
			this.res.githubAccount = answers.githubAccount;
			this.res.projectName = answers.projectName;
			this.res.objectName = answers.objectName;
		}.bind(this));
	}
	writing() {
		var self = this;
		var tpl = function (input, output) {
			self.fs.copyTpl(
				self.templatePath(input),
				self.destinationPath(output),
				self.res
			);
		};
		var cp = function (input, output) {
			self.fs.copy(
				self.templatePath(input),
				self.destinationPath(output)
			);
		};

		tpl(
			'src/_script.php',
			'src/' + this.githubAccount + '/' + this.objectName + '/' + this.objectName + '.php'
		);
		tpl('tests/_scriptTest.php', 'tests/' + this.objectName + 'Test.php');
		tpl('_gruntfile.js', 'Gruntfile.js');
		tpl('_package.json', 'package.json');
		tpl('_composer.json', 'composer.json');
		tpl('_README.md', 'README.md');
		cp('gitignore', '.gitignore');
		cp('gitattributes', '.gitattributes');
		cp('travis.yml', '.travis.yml');
		tpl('_travis-ci.xml', 'travis-ci.xml');
		tpl('_phpunit.xml', 'phpunit.xml');
		cp('editorconfig', '.editorconfig');
	}
	install() {
		this.installDependencies({skipInstall: this.option('skip-install')});
	}
};
