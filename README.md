generator-composer
==================

[![NPM version](https://badge.fury.io/js/generator-composer.png)](http://badge.fury.io/js/generator-composer)
[![Dependencies](https://david-dm.org/t1st3/generator-composer.png)](https://david-dm.org/t1st3/generator-composer)
[![Build Status](https://travis-ci.org/T1st3/generator-composer.png?branch=master)](https://travis-ci.org/T1st3/generator-composer)


About
-----------

A generator for [Yeoman](http://yeoman.io).

It provides a basic boilerplate for a [Composer](http://getcomposer.org), which features:

* automatic creation of [PhpDoc](http://phpdoc.org) documentation on build
* a functional example
* build with [Grunt](http://gruntjs.com)


The proposed Grunt build for the generated Composer project has the following tasks:

* PHPLint to review quality of code
* PHPUnit to run tests
* automatic creation of the documentation


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

[![NPM](https://nodei.co/npm/generator-composer.png?compact=true)](https://nodei.co/npm/generator-composer/)



Usage
-----------

Once you have installed Node, NPM and Yeoman, you can initiate the generator:

```
yo amd
```

Yeoman will ask you 4 questions:

1. your github account (e.g. gitaccount)
2. the name of the repository on Github (e.g. my-composer-project)
3. the version of the project (e.g. 0.1.0)




Build dependencies
-----------

In order to build your generated Composer project from its source, you will also need Grunt and PHP on the command line.

So, you must install PHP5 on your system on your command line. Test it:

```
php --help
```


To install Grunt globally on the command line (and run the above build task), run:

```
npm install -g grunt-cli
```




Build your project
-----------

Once you have generated your AMD module skeleton, you can:

- install once Composer, PhpDocumentor and PhpUnit locally

```
grunt init
```

- build the minified files, the documentation and the example with Grunt:

```
grunt build
```


Credits
-----------

* [Yeoman](http://yeoman.io)
* [Bower](http://bower.io)
* [Grunt](http://gruntjs.com)
* [Composer](http://getcomposer.org)

 



License
-----------

This generator is released under the [MIT License](https://github.com/T1st3/generator-composer/blob/master/LICENSE).
