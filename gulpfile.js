const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

gulp.task('sass', function () { 
    return gulp.src('./src/sass/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ["last 2 versions"]
        }))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch(['./src/sass/**/*.scss'], ['sass']);
});

gulp.task('watch', ['sass:watch']);
gulp.task('default', ['sass']);