var gulp = require('gulp');
var del = require('del');
var log = require('fancy-log');
var config = require('../gulp.config');

function clean(cb) {
	log('Cleaning files');
	return del([
		config.path.dist.base,
		config.path.tmp
	  ]);
	cb();
};

gulp.task(clean);