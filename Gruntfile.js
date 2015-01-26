'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt, {
    scope: 'devDependencies',
    config: 'package.json',
    pattern: ['grunt-*']
  });

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'app/index.js',
        'Gruntfile.js'
      ]
    },
    jscs: {
      src: ['app/index.js', 'Gruntfile.js'],
      options: {
        config: '.jscs.json'
      }
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'jscs'
  ]);
};
