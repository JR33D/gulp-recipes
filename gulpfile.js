var gulp = require("gulp");
var HubRegistry = require("gulp-hub");

/* load some files into the registry */
var hub = new HubRegistry(["gulp/tasks/*.js"]);

/* tell gulp to use the tasks just loaded */
gulp.registry(hub);

gulp.task("default", function(done) {
  console.log('setup your tasks under `./gulp/tasks` and then call them in your `./gulpfile.js`');
  done();
});
