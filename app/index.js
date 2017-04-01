'use strict';

const generators = require('yeoman-generator');
const figlet = require('figlet');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');

module.exports = class extends generators {
	constructor(args, opts) {
		super(args, opts);
		this.res = {};
		const done = this.async();
		const notifier = updateNotifier({
			pkg
		});
		if (notifier.update) {
			notifier.notify();
		}

		figlet('yo composer', (err, data) => {
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
		}]).then(function (answers) { // eslint-disable-line prefer-arrow-callback
			this.log('github account', answers.githubAccount);
			this.log('project name', answers.projectName);
			this.log('object name', answers.objectName);
			this.res.githubAccount = answers.githubAccount;
			this.res.projectName = answers.projectName;
			this.res.objectName = answers.objectName;
		}.bind(this));
	}
	writing() {
		const self = this;
		const tpl = function (input, output) {
			self.fs.copyTpl(
				self.templatePath(input),
				self.destinationPath(output),
				self.res
			);
		};
		const cp = function (input, output) {
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
