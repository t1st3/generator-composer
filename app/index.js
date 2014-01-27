'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var figlet = require('figlet');

var ComposerGenerator = module.exports = function ComposerGenerator(args, options) {
	yeoman.generators.Base.apply(this, arguments);

	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(ComposerGenerator, yeoman.generators.Base);

ComposerGenerator.prototype.askFor = function askFor() {
	var cb = this.async();
	
	var t = this;
	figlet('yo composer', function (err, data) {
		if (err) {
			console.log('Something went wrong with figlet');
			console.dir(err);
			return;
		} else {
			console.log(data);
			var updateNotifier = require('update-notifier');
			var notifier = updateNotifier(
				{
					packagePath: '../package.json',
					packageName: 'generator-composer'
				}
			);
			if (notifier.update) {
				notifier.notify();
			}
			console.log(t.yeoman);

			var prompts = [
				{
					name: 'githubAccount',
					message: 'What is your github account (e.g. myGitAccount)?'
				},
				{
					name: 'projectName',
					message: 'What is the name of your PHP project (the slug-name of the Github repository, e.g. php-my-super-package)?'
				},
				{
					name: 'objectName',
					message: 'What is the name of your main PHP class (e.g. mySuperPackage)?'
				}
			];

			t.prompt(prompts, function (props) {
				t.githubAccount = props.githubAccount;
				t.projectName = props.projectName;
				t.objectName = props.objectName;
				cb();
			}.bind(t));
		}
	});
};

ComposerGenerator.prototype.app = function app() {

	this.mkdir('src');
	this.mkdir('src/' + this.githubAccount);
	this.mkdir('src/' + this.githubAccount + '/' + this.objectName);
	this.template('src/_script.php', 'src/' + this.githubAccount + '/' + this.objectName + '/' + this.objectName + '.php');
	
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
	
};

ComposerGenerator.prototype.projectfiles = function projectfiles() {
	this.copy('editorconfig', '.editorconfig');
};
