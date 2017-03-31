var gulp = require('gulp');
var sass = require('gulp-sass');
var cssimport = require('gulp-cssimport');
var options = {
    matchPattern: '*.scss'
};

gulp.task('import', function() {
  gulp.src('./lib/scss/styles.scss')
    .pipe(cssimport(options))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./production/css'));
});

gulp.task('html', function () {
  return gulp.src('./lib/html/*.html')
  .pipe(gulp.dest('./production/'));
});

gulp.task('grid', function () {
  return gulp.src('./lib/grid/*.*')
  .pipe(gulp.dest('./production/grid'));
});

gulp.task('fonts', function () {
  return gulp.src('./lib/fonts/*.*')
  .pipe(gulp.dest('./production/fonts'));
});

gulp.task('img', function () {
  return gulp.src('./lib/img/*.*')
  .pipe(gulp.dest('./production/img'));
});

gulp.task('js', function () {
  return gulp.src('./lib/js/*.*')
  .pipe(gulp.dest('./production/js'));
});

gulp.task('default', ['import', 'html', 'grid', 'fonts', 'img', 'js'], function () {
  return;
});
