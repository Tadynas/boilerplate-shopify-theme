const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
    return gulp.src('src/styles/*.sass')
            .pipe(sass())
            .pipe(gulp.dest('assets'))
});

gulp.task('watch', function() {
    gulp.watch('src/styles/*.sass', gulp.series('sass'));
})