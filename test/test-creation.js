'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('composer:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .inDir(path.join(os.tmpdir(), './temp-test'))
      .withOptions({ 'skip-install': true })
      .withPrompt({
        ProjectName: 'php-my-super-package',
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
