const gulp = require('gulp');
const fs = require("fs");
const fileinclude = require('gulp-file-include');
const markdown = require('marked');

const postcss = require('gulp-postcss');
const cssimport = require('postcss-import');
const cssnext = require("postcss-cssnext")
const simplevars = require('postcss-simple-vars');
const nestedcss = require('postcss-nested');
const mqpacker = require('css-mqpacker');
const cssmin = require('gulp-cssmin');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('html', function () {
	return gulp.src(['./src/html/**/*.html'])
		.pipe(fileinclude({
            prefix: '@@',
            basepath: './src/html/',
            filters: {
                markdown: markdown.parse
            },
            context: {
                year: new Date().getFullYear(),
                baseurl: 'http://www.satsuma.se/',
                csspath: '../css',
                jspath: '../js',
                imgpath: '../img'
            }
        }))
		.pipe(gulp.dest('app'));
});

gulp.task('html:watch', function () {
    gulp.watch(['./src/html/**/*.html', './src/md/**/*.md', './src/html-templates/**/*.html'], ['html']);
});

gulp.task('css', function () {
    var processors = [
        cssnext,
        cssimport,
        nestedcss,
        simplevars,
        mqpacker
    ];
    
    gulp.src('./src/css/**/*.css')
        .pipe(concat('main.css'))
        .pipe(postcss(processors))
        .pipe(cssmin())
        .pipe(gulp.dest('./app/css'));
});

gulp.task('css:watch', function () {
    gulp.watch('./src/css/**/*.css', ['css']);
});
 
gulp.task('js', function(){
  return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('app/js'))
});

gulp.task('js:watch', function () {
    gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('watch', ['html:watch', 'css:watch', 'js:watch']);
gulp.task('default', ['html', 'css', 'js']);