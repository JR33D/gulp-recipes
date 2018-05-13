var gulp = require("gulp");
var bump = require("gulp-bump");
var log = require("fancy-log");
var fs = require("fs");
var semver = require("semver");
const argv = require("yargs").argv;

var config = require("../gulp.config");

var getPackageJson = function() {
  return JSON.parse(fs.readFileSync(config.path.packageJson, "utf8"));
};

function bumpVersion() {
  var pkg = getPackageJson();
  var newVer = semver.inc(pkg.version, argv.updateVersion || "minor");
  return gulp
    .src([config.path.packageJson])
    .pipe(
      bump({
        version: newVer
      })
    )
    .pipe(gulp.dest(config.path.root));
}

function publish(cb) {
  log("publishing project");
  cb();
}

gulp.task(bumpVersion);
gulp.task(publish);
