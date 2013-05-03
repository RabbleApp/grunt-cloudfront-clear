# grunt-cloudfront-clear

> Used to invalidate files on Amazon CloudFront

This is a simple wrapper for [invalidatejs](https://github.com/Johnny-Ray/invalidatejs)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-cloudfront-clear --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-cloudfront-clear');
```

## The "cloudfront_clear" task

### Overview
In your project's Gruntfile, add a section named `cloudfront_clear` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  cloudfront_clear: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

Check out [invalidatejs](https://github.com/Johnny-Ray/invalidatejs) for config options.

### Usage Example

```js
grunt.initConfig({
  cloudfront_clear: {
    invalidateIndex: {
      resourcePaths: ["/index.html"],
      secret_key: "AWS secret",
      access_key: "AWS key",
      dist: "CloudFront Distribution"
    }
  }
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
