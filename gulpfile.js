var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var serverPath = './server/**/*.js';
var appPath = './public/app/**/*.js';

gulp.task('lint-server', function () {
  return gulp.src(serverPath)
          .pipe(jshint())
          .pipe(jshint.reporter(stylish))
          .pipe(jshint.reporter('fail'));
});

gulp.task('lint-app', function () {
  return gulp.src(appPath)
          .pipe(jshint())
          .pipe(jshint.reporter(stylish))
          .pipe(jshint.reporter('fail'));
});

gulp.task('lint', ['lint-server', 'lint-app']);

gulp.task('watch', function () {
  gulp.watch(serverPath, ['lint-server']);
  gulp.watch(appPath, ['lint-app']);
});

gulp.task('default', ['lint', 'watch']);