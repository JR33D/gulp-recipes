var gulp = require('gulp');
var log = require('fancy-log');
var config = require('../gulp.config');

function move(cb) {
	log('moving project')
	cb();
};

gulp.task(move);