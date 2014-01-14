<%= projectName %>
==============

About
--------------

URL: [https://github.com/<%= githubAccount %>/<%= projectName %>](https://github.com/<%= githubAccount %>/<%= projectName %>)

Author: <%= githubAccount %>

Version: <%= projectVersion %>



Build dependencies
--------------

In order to build your generated Composer project from its source, you will also need Grunt and PHP on the command line.

So, you must install PHP5 on your system on your command line. Test it:

```
php --help
```


To install Grunt globally on the command line (and run the above build task), run:

```
npm install -g grunt-cli
```


Then, with Grunt, you can install Composer, PhpDocumentor, PhpUnit and PhpCPD locally. Just run once:

```
grunt init
```




Build your project
--------------

Once all your dependencies are installed, you can build your project with Grunt:

```
grunt build
```

The build process will run the following tasks:

* PhpLint: runs php -l over the "src" folder
* Runs the tests located in the "tests" folder with [PHPUnit](http://phpunit.de/)
* Generates a [PhpDocumentor](http://phpdoc.org) documentation in the "doc" folder from the files of the "src" folder
* Detects copy/paste of code in the files of the "src" folder with [PhpCPD](https://github.com/sebastianbergmann/phpcpd)

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)



License
--------------

[License](https://github.com/<%= githubAccount %>/<%= projectName %>/blob/master/LICENSE)