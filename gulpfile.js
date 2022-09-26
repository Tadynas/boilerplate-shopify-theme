const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var clean = require('gulp-clean');

gulp.task('sass', function() {
    return gulp.src('src/styles/*.sass')
            .pipe(sass())
            .pipe(gulp.dest('assets'))
});

gulp.task('clean', function(){
    return gulp.src('assets/*.css', {read: false}).pipe(clean());
});

gulp.task('watch', function() {
    gulp.watch('src/styles/*.sass', gulp.series('sass'));
})

gulp.task('dev', gulp.series('clean', 'sass', 'watch'))