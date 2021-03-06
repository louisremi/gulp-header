/* jshint node: true */
'use strict';

var es = require('event-stream');
var gutil = require('gulp-util');
var extend = require('lodash.assign');

var headerPlugin = function(headerText, data) {
  headerText = headerText || '';
  return es.map(function(file, cb){
    file.contents = Buffer.concat([
      new Buffer( typeof headerText === 'function' ?
        headerText( file ) :
        gutil.template(headerText, extend({file : file}, data))
      ),
      file.contents
    ]);
    cb(null, file);
  });
};

module.exports = headerPlugin;
