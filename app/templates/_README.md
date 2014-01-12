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




Build your project
--------------

Once you have generated your AMD module skeleton, you can:

- install once Composer, PhpDocumentor and PhpUnit locally

```
grunt init
```

- build the minified files, the documentation and the example with Grunt:

```
grunt build
```

[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)


License
--------------

[License](https://github.com/<%= githubAccount %>/<%= projectName %>/blob/master/LICENSE)