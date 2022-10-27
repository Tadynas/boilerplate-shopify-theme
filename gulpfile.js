const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const flatten = require('gulp-flatten');
const run = require('gulp-run');

gulp.task('clean', function(){
    return gulp.src('dist/*', {read: false}).pipe(clean())
});

gulp.task('styles', function() {
    return gulp.src('src/assets/styles/**/*.sass')
        .pipe(sass())
        .pipe(flatten())
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('scripts', function() {
    return gulp.src('src/assets/scripts/**/*.js')
        .pipe(flatten())
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('assets', gulp.series('styles', 'scripts'));

gulp.task('files', function() {
    return gulp.src(['src/.shopifyignore', 'src/**/*', '!src/assets/**/*', '!src/templates/**/*'])
        .pipe(flatten({ includeParents: 1}))
        .pipe(gulp.dest('dist'))
});

gulp.task('templates', function() {
    return gulp.src('src/templates/**/*')
        .pipe(gulp.dest('dist/templates'))
});

gulp.task('serve', function() {
    return run('start shopify theme serve dist').exec()
})

gulp.task('watch', function() {
    gulp.watch('src/assets/styles/**/*', gulp.series('styles'));
    gulp.watch('src/assets/scripts/**/*', gulp.series('scripts'));
    gulp.watch(['src/**/*', '!src/assets/**/*', '!src/templates/**/*'], gulp.series('files'));
    gulp.watch('src/templates/**/*', gulp.series('templates'));
})

gulp.task('dev', gulp.series('clean', 'assets', 'files', 'templates', 'serve', 'watch'))
// gulp.task('dev', gulp.series('clean', 'assets', 'files', 'templates'))