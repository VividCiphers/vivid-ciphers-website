var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  return gulp.src('./library/**/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./production/css'));
});

gulp.task('watch', function () {
  gulp.watch('./library/**/*.scss', ['sass']);
});
