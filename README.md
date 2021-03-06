# gulp-header [![NPM version](https://badge.fury.io/js/gulp-header.png)](http://badge.fury.io/js/gulp-header) [![Build Status](https://travis-ci.org/godaddy/gulp-header.png)](https://travis-ci.org/godaddy/gulp-header)

gulp-header is a [Gulp](https://github.com/gulpjs/gulp) extension to add a header to file(s) in the pipeline.  [Gulp is a streaming build system](https://github.com/gulpjs/gulp) utilizing [node.js](http://nodejs.org/).

```javascript
var header = require('gulp-header');
```

## Usage

```javascript
var header = require('gulp-header');

gulp.src('./foo/*.js')
  .pipe(header('Hello'))
  .pipe(gulp.dest('./dist/')

gulp.src('./foo/*.js')
  .pipe(header('Hello <%= name %>\n', { name : 'World'} ))
  .pipe(gulp.dest('./dist/')

gulp.src('./foo/*.js')
  .pipe(header('Hello ${name}\n', { name : 'World'} ))
  .pipe(gulp.dest('./dist/')

gulp.src('./foo/*.js')
  .pipe(header(function(file) {
    return 'Hello ' + file.path;
  })
  .pipe(gulp.dest('./dist/')


//


var pkg = require('./package.json');
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''].join('\n');

gulp.src('./foo/*.js')
  .pipe(header(banner, { pkg : pkg } ))
  .pipe(gulp.dest('./dist/')
  

//


var fs = require('fs');

gulp.src('./foo/*.js')
  .pipe(header(fs.readFileSync('header.txt', 'utf8'), { pkg : pkg } ))
  .pipe(gulp.dest('./dist/')
```

## API

### header(text, data)

#### text

Type: `String`  
Default: `''`  

The template text.


#### data

Type: `Object`  
Default: `{}`  

The data object used to populate the text.

### header(headerCb)

#### headerCb

Type: `Function`  
Default: `undefined`  

The function that will return the header text. It receives one argument: the file object.

## License

```
The MIT License (MIT)

Copyright (c) 2013 GoDaddy.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
