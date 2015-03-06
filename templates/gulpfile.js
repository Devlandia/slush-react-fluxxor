/*globals require, console*/
var production = false;

var gulp        = require('gulp'),
    source      = require('vinyl-source-stream'),
    reactify    = require('reactify'),
    browserify  = require('browserify'),
    browserSync = require('browser-sync');

gulp.task('default', ['server']);
gulp.task('compile', ['browserify', 'html']);

gulp.task('server', function () {
  browserSync({
    files: ['build/js/*.js', 'build/index.html'],
    server: {
      baseDir: './build'
    }
  });
});

gulp.task('browserify', function() {
  browserify('./src/js/app.jsx')
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('build'));
});
