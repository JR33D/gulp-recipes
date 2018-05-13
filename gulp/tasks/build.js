var gulp = require('gulp');
var log = require('fancy-log');
var config = require('../gulp.config');


function build(cb) {
	log('building project')
	cb();
};

gulp.task(build);