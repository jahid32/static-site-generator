/**
 * Quick HTML Template Bilder
 */
/**
 * [Initiate require pakeges]
 **/
var gulp  = require('gulp'),
    uglify = require('gulp-uglify'),
    sass  = require('gulp-sass'),
    jade  = require('gulp-jade'),
    connect = require('gulp-connect'),
    open = require("gulp-open"),
    plumber= require('gulp-plumber');


/**
 * [Check javascript error and compress script]
 */
gulp.task('scripts',function(){
  gulp.src('js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(connect.reload());
});

/**
 * Compile sass into css and minify.
 */
gulp.task('style',function(){
  gulp.src('scss/*.scss')
    .pipe(plumber())
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      style: 'compressed'
    }))
    .pipe(gulp.dest('build/css/'))
    .pipe(connect.reload());
});

/**
 * Compile jade to html
 */
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

