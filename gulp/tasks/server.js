var gulp = require('gulp');
var log = require('fancy-log');
var config = require('../gulp.config');

function bundle(cb) {
	log('bundling project')
	cb();
};

function serve(cb) {
	log('serving project')
	cb();
};

gulp.task(bundle);
gulp.task(serve);