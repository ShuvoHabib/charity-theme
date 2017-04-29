var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src('app/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: 'app',
            index: "index.html"
        }
    })
});

gulp.task('default', ['serve','sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);

});