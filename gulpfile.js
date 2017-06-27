var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require("gulp-uglifyjs");
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var rev = require('gulp-rev');
var nano = require('gulp-cssnano');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var less = require('gulp-less');

gulp.task('less',function() {
    return gulp.src(['dev/css/app.less'])
        .pipe(less().on('error', function (e){
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(postcss([autoprefixer]))
        .pipe(nano())
        .pipe(gulp.dest('build/css'))
});

gulp.task('watch',function() {
    gulp.watch(['css/app.less','css/less-module/*.less'],['less']);
});

gulp.task('default', ['less','watch']);