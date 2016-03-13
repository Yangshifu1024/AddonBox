import gulp from 'gulp'

gulp.task('copy', function() {
    gulp.src('./app/**/*.html').pipe(gulp.dest('./dist'))
});
