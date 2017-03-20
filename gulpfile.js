var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./library/styles/**/*.scss')
    .pipe(concat('styles.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./production/css'));
});

gulp.task('fonts', function () {
  return gulp.src('./library/fonts/**/*.*')
  .pipe(gulp.dest('./production/fonts'));
});

gulp.task('watch', function () {
  gulp.watch('./library/**/*.scss', ['sass']);
});

gulp.task('compile', ['sass', 'fonts'], function () {
    return;
});
