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
    open = require("gulp-open"),
    plumber= require('gulp-plumber'),
    bs = require('browser-sync').create();

var paths = {
  scss: 'assets/scss/*.scss',
  jade: 'assets/jade/*.jade',
  js: 'assets/js/*.js'
} ;

/**
 * [Check javascript error and compress script]
 */
gulp.task('js',function(){
  gulp.src(paths.js)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
    .pipe(bs.reload({stream: true}));
});

/**
 * Compile sass into css and minify.
 */
gulp.task('style',function(){
  gulp.src(paths.scss)
    .pipe(plumber())
    .pipe(sass({
      includePaths: require('node-bourbon').includePaths,
      style: 'compressed'
    }))
    .pipe(gulp.dest('build/css/'))
    .pipe(bs.reload({stream: true}));
});

/**
 * Compile jade to html
 */
gulp.task('html',function(){
  gulp.src(paths.jade)
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('build/'))
    .pipe(bs.reload({stream: true}));
});


// Watch Files For Changes & Reload withnode server
gulp.task('server', ['html', 'style', 'js'], function () {
  bs.init({
        server: {
            baseDir: "./build"
        },
            port: 9000
        
        //  proxy: "yourlocal.dev"
    });
  // gulp.watch(paths.jade, ['html']);
  // gulp.watch(paths.scss, ['style']);
  // gulp.watch(paths.js, ['js']);
});
// Watch task
// It's watches java script
gulp.task('watch',function(){
  gulp.watch(paths.jade, ['html']);
  gulp.watch(paths.scss, ['style']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['js', 'style', 'html' ,'serve']);

