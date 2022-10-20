const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const flatten = require('gulp-flatten');
const run = require('gulp-run');

gulp.task('clean', function(done){
    gulp.src('dist/assets/*', {read: false}).pipe(clean());
    gulp.src('dist/config/*', {read: false}).pipe(clean());
    gulp.src('dist/layout/*', {read: false}).pipe(clean());
    gulp.src('dist/locales/*', {read: false}).pipe(clean());
    gulp.src('dist/sections/*', {read: false}).pipe(clean());
    gulp.src('dist/snippets/*', {read: false}).pipe(clean());
    gulp.src('dist/templates/*', {read: false}).pipe(clean());
    done()
});

gulp.task('sass', function() {
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

gulp.task('assets', gulp.series('sass', 'scripts'));

gulp.task('files', function() {
    return gulp.src(['src/.shopifyignore', 'src/**/*', '!src/assets/**/*'])
        .pipe(flatten({ includeParents: 1}))
        .pipe(gulp.dest('dist'))
});

gulp.task('serve', function() {
    return run('start shopify theme serve dist').exec()
})

gulp.task('watch', function() {
    gulp.watch('src/assets/**/*', gulp.series('assets'));
    gulp.watch(['src/**/*', '!src/assets/**/*'], gulp.series('files'));
})

// gulp.task('dev', gulp.series('clean', 'assets', 'files'))
gulp.task('dev', gulp.series('clean', 'assets', 'files', 'serve', 'watch'))