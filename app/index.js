'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var AmdGenerator = module.exports = function AmdGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(AmdGenerator, yeoman.generators.Base);

AmdGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);

	var prompts = [
		{
			name: 'githubAccount',
			message: 'What is your github account?'
		},
		{
			name: 'projectName',
			message: 'What is the name of your PHP project (the slug-name of the Github repository)?'
		},
		{
			name: 'projectVersion',
			message: 'What is the version of your PHP project?'
		}
	];

	this.prompt(prompts, function (props) {
		this.githubAccount = props.githubAccount;
		this.projectName = props.projectName;
		this.projectVersion = props.projectVersion;
		cb();
	}.bind(this));
};

AmdGenerator.prototype.app = function app() {

	this.mkdir('src');
	this.template('src/_script.php', 'src/' + this.projectName + '.php');
	
	this.mkdir('tests');
	this.template('tests/_scriptTest.php', 'tests/' + this.projectName + 'Test.php');

	this.mkdir('example');
	
	
	this.mkdir('dist');
	this.mkdir('doc');
	this.mkdir('lint');
	this.mkdir('lint/tmp');
	
	this.template('_gruntfile.js', 'Gruntfile.js');
	this.template('_package.json', 'package.json');
	this.template('_composer.json', 'composer.json');
	this.copy('gitignore', '.gitignore');
	
};

AmdGenerator.prototype.projectfiles = function projectfiles() {
	this.copy('editorconfig', '.editorconfig');
};
