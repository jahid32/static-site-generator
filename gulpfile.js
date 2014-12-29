var gulp  = require('gulp'),
    uglify = require('gulp-uglify'),
    sass  = require('gulp-ruby-sass'),
    jade  = require('gulp-jade'),
    connect = require('gulp-connect'),
    open = require("gulp-open"),
    plumber= require('gulp-plumber');

// Scripts Task
// Uglifiles

gulp.task('scripts',function(){
  gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
    .pipe(connect.reload());
});

// Scripts Task
// Uglifiles

gulp.task('style',function(){
  gulp.src('scss/*.scss')
    .pipe(plumber())
    .pipe(sass({
      style: 'compressed'
    }))
    .pipe(gulp.dest('build/css/'))
    .pipe(connect.reload());
});
// Jade task
//
gulp.task('jade',function(){
  gulp.src("jade/*.jade")
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('build/'))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});
// Watch task
// It's watches java script
gulp.task('watch',function(){
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/*.scss', ['style']);
  gulp.watch('jade/**/*.jade', ['jade']);
});

gulp.task('default', ['scripts', 'style', 'watch', 'connect']);

