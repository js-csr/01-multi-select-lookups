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

gulp.task('default', function(done) {
  runSequence('clean', 'compile', 'bundle', function () {
        done();
    });
});

gulp.task('clean', function () {
    return gulp
        .src('Z:\\', { read: false })
        .pipe(gprint())
        .pipe(clean());
});

gulp.task('compile', function() {
    return runCompile();
});

gulp.task('bundle', function() {
    var cfg = {
        BundleSrc: ['./jslink-helper.js', './multi-select-jslink.js'],
        BundleFileName: 'multi-select.js',
        MinifyFileName: 'multi-select.min.js',
        Dest: 'Z:\\'
    };

    return runBuild(cfg);
});


function runCompile() {
    var tsc = gulp
        .src('./**.ts')
        .pipe(gprint())
        .pipe(ts({ "noImplicitAny": true, "removeComments": true }));

    return tsc.js.pipe(gulp.dest('.'));
};

function runBuild(cfg) {
    var bundleSrc = cfg.BundleSrc;
    var bundleFileName = cfg.BundleFileName;
    var minifyFileName = cfg.MinifyFileName;
    var dest = cfg.Dest;

    return gulp
        .src(bundleSrc)
        .pipe(gprint())
        .pipe(sourcemaps.init())
        .pipe(bundle(bundleFileName))
        .pipe(gulp.dest(dest))
        .pipe(rename(minifyFileName))
        .pipe(minify({
            "compress": {
                "drop_console": false
            }
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(dest));
};