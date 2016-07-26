var gulp = require('gulp'),
    gprint = require('gulp-print'),
    runSequence = require('run-sequence'),
    ts = require('gulp-typescript'),
    typescript = require('gulp-tsc'),
    bundle = require('gulp-concat'),
    minify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    copy = require('gulp-copy'),
    clean = require('gulp-clean'),
    templateCache = require('gulp-angular-templatecache'),
    argv = require('yargs').argv,
    gulpif = require('gulp-if');

gulp.task('default', function() {
  return runCompile(null);
});

function runCompile(cfg) {
    var tsc = gulp
        .src('./**.ts')
        .pipe(gprint())
        .pipe(ts({ "noImplicitAny": true, "removeComments": true }));

    return tsc.js.pipe(gulp.dest('.'));
};