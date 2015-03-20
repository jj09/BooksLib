var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var path = require('path');
var serverPath = './server/**/*.js';
var appPath = './public/app/**/*.js';
var stylesheetsPath = './public/stylesheets/**/*.less';

// jshint linting

gulp.task('lint', ['lint-server', 'lint-app']);

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

// styles

gulp.task('less', function () {
  return gulp.src(stylesheetsPath)
          .pipe(less({paths: [ path.join(__dirname, 'less', 'includes') ]}))
          .pipe(minifyCSS())
          .pipe(gulp.dest('./public/stylesheets'));
});


// core

gulp.task('watch', function () {
  gulp.watch(serverPath, ['lint-server']);
  gulp.watch(appPath, ['lint-app']);
  gulp.watch(stylesheetsPath, ['less']);
});

gulp.task('default', ['lint', 'less', 'watch']);