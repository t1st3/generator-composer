generator-composer
==================

[![NPM version](https://img.shields.io/npm/v/generator-composer.svg)](https://www.npmjs.com/package/generator-composer)
[![Dependency Status](https://img.shields.io/david/T1st3/generator-composer.svg)](https://david-dm.org/t1st3/generator-composer)
[![devDependency Status](https://david-dm.org/t1st3/generator-composer/dev-status.svg)](https://david-dm.org/t1st3/generator-composer#info=devDependencies)
[![Build Status](https://img.shields.io/travis/T1st3/generator-composer.svg)](https://travis-ci.org/T1st3/generator-composer)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/t1st3/generator-composer.svg)](http://isitmaintained.com/project/t1st3/generator-composer "Percentage of issues still open")


About
-----------

A generator for [Yeoman](http://yeoman.io).

It provides a basic boilerplate for a [Composer](http://getcomposer.org) project, which features:

* automatic creation of [PhpDoc](http://phpdoc.org) documentation on build
* a functional example
* buildable with [Grunt](http://gruntjs.com)
* Ready for [Github](https://github.com), [Travis-CI](https://travis-ci.org/) and [Packagist](https://packagist.org/)


The proposed Grunt build for the generated Composer project has the following tasks:

* PHPLint to review quality of code
* [PHPUnit](http://phpunit.de/) to run tests
* automatic creation of a [PhpDocumentor](http://phpdoc.org) documentation
* Usage of [Php Copy/Paste Detector](https://github.com/sebastianbergmann/phpcpd)
* Automatic versioning of all the project when version is modified in package.json

The generated PHP project does not rely on any other PHP dependency than Composer and Packagist-installed packages (e.g. no PEAR dependency).


Installation
-----------

You must have Nodejs and NPM installed. 

Then, to install Yeoman globally from npm, run:

```
npm install -g yo
```

Finally, to install generator-composer globally from npm, run:

```
npm install -g generator-composer
```

You may also just install it locally:


```
npm install generator-composer
```



Usage of the generator
-----------

Once you have installed Node, NPM, Yeoman and the generator itself, you can initiate the generator:

```
yo composer
```

Yeoman will ask you 3 questions:

1. your github account (e.g. gitAccount)
2. the name of the repository on Github (e.g. php-my-super-package)
3. the name of the main PHP class of your project (e.g. mySuperPackage)




Build dependencies of your generated PHP project
-----------

In order to build your generated Composer project from its source, you will need Grunt and PHP on the command line.

So, you must install PHP5 on your system on your command line. Test it:

```
php --help
```


To install Grunt globally on the command line (and run the above build task), run:

```
npm install -g grunt-cli
```

Then, with Grunt, you can install Composer locally. Just run once:

```
grunt init
```

Then, you can install PhpDocumentor, PhpUnit and PhpCPD locally. Just run once:

```
php composer.phar install -v
```

Finally, you should also install the PHP extension named Xdebug, which will be used by PhpUnit for code coverage.




Build the sources of your generated PHP project
-----------

Once all your dependencies are installed, you can build your project with Grunt:

```
grunt build
```

The build process will run the following tasks:

* PhpLint: runs php -l over the "src" folder
* Runs the tests located in the "tests" folder with [PHPUnit](http://phpunit.de/)
* Generates a [PhpDocumentor](http://phpdoc.org) documentation in the "doc" folder from the files of the "src" folder
* Detects copy/paste of code in the files of the "src" folder with [PhpCPD](https://github.com/sebastianbergmann/phpcpd)



Publish your generated project on Packagist
--------------

The generated PHP is ready-to-publish on [Packagist](https://packagist.org/). Just login on Packagist with Github, add the Packagist hooks to your Github account, and activate your package on Packagist.



Build the generator from its sources
-----------

The generator itself can be built from its sources. At the moment, the build process only includes syntax checks with [JSHint](http://jshint.com) and [JSCS](https://npmjs.org/package/jscs).

In order to build the generator from its source, you will need Grunt. To install Grunt globally on the command line (and run the above build task), run:

```
npm install -g grunt-cli
```

Just run the `grunt task` in the folder where your generator is installed:

```
grunt
```

[![Dev dependencies Status](https://img.shields.io/david/dev/T1st3/generator-composer.svg)](https://david-dm.org/t1st3/generator-composer#info=devDependencies)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)





Todos
----------

- Try to get a livereload process for the generated project (maybe with grunt-php)
- More comments in the code
- Include a changelog generator in the build process of the generated code
- Include a changelog generator in the build process of generator



Credits
-----------

* [Yeoman](http://yeoman.io)
* [Grunt](http://gruntjs.com)
* [Composer](http://getcomposer.org)

 



License
-----------

This generator is released under the [MIT License](https://github.com/T1st3/generator-composer/blob/master/LICENSE).



