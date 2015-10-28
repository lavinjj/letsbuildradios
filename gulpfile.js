var gulp = require('gulp');
var tslint = require('gulp-tslint');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var karma = require("gulp-karma");

var tsProject = ts.createProject({
  "target": "ES5",
  "module": "commonjs",
  "sourceMap": true,
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true
});

var tsTestProject = ts.createProject({
  "target": "ES5",
  "module": "commonjs",
  "sourceMap": true,
  "emitDecoratorMetadata": true,
  "experimentalDecorators": true
});

gulp.task('lint', function() {
  return gulp.src([
    './app.ts','./components/**/**.ts', './models/**/**.ts', './test/**/**.test.ts'
  ]).pipe(tslint())
  .pipe(tslint.report('verbose'));
});

gulp.task('tsc', function() {
  return gulp.src(['./app.ts','./components/**/**.ts', './models/**/**.ts'])
  .pipe(ts(tsProject))
  .js.pipe(gulp.dest('./temp/src/js'));
});

gulp.task('tsc-tests', function() {
  return gulp.src('./test/**/**.test.ts')
  .pipe(ts(tsTestProject ))
  .js.pipe(gulp.dest('./temp/test/'));
});

gulp.task('karma', function(cb) {
  gulp.src('./temp/test/**/**.test.js')
  .pipe(karma({
    configFile: 'karma.conf.js',
    action: 'run'
  }))
  .on('end', cb)
  .on('error', function(err) {
    // Make sure failed tests cause gulp to exit non-zero
    throw err;
  });
});

gulp.task('default', function(cb) {
  runSequence('lint', ['tsc', 'tsc-tests'], 'karma', cb);
} );
