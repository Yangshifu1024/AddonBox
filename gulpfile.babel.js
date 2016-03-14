import gulp from 'gulp'
import gutil from 'gulp-util'
import del from 'del'
import webpack from 'webpack'
import webpackConfig from './webpack.config.babel.js'

gulp.task('clean', function() {
    del(['dist/*']);
})

gulp.task('copy', function() {
    gulp.src('./app/**/*.css').pipe(gulp.dest('./dist'))
    gulp.src('./app/entry.js').pipe(gulp.dest('./dist'))
    gulp.src('./package.json').pipe(gulp.dest('./dist'))
})

gulp.task('webpack', function() {
    webpack(webpackConfig, function(err, stats) {
       gutil.log(stats.toString({color: true}))
    })
})

gulp.task('dist', ['clean', 'copy', 'webpack'])

gulp.task('watch', ['dist'], function() {
    gulp.watch(['./app/entry.js', './package.json'], ['copy'])
    gulp.watch(['./app/**/*.js', './app/**/*.ejs'], ['webpack'])
})

gulp.task('default', ['watch'])
