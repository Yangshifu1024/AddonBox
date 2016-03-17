import {exec} from 'child_process'
import gulp from 'gulp'
import gutil from 'gulp-util'
import del from 'del'
import webpack from 'webpack'
import packager from 'electron-packager'
import webpackConfig from './webpack.config.babel.js'

gulp.task('clean', () => {
    del(['dist/*']);
    del(['build']);
})

gulp.task('copy', () => {
    gulp.src('./app/entry.js').pipe(gulp.dest('./dist'))
    gulp.src('./package.json').pipe(gulp.dest('./dist'))
    gulp.src('./app/assets/**/*.*').pipe(gulp.dest('./dist/assets/'))
})

gulp.task('webpack', () => {
    webpack(webpackConfig, (err, stats) => {
        gutil.log(stats.toString({
            chunks: false,
            assets: true,
            colors: true,
            version: false,
            hash: false,
        }))
    })
})

gulp.task('pack', ['clean', 'copy', 'webpack'], () => {
    let opts = {
        name: 'PluginBox',
        arch: 'x64',
        dir: './dist',
        out: './build',
        platform: 'darwin',
        version: '0.37.2',
        icon: './app/assets/logo.icns',
    }
    packager(opts, (err, path) => {
        if (err) {
            console.error(err)
        } else {
            exec('open '+ path[0])
        }
    })
})

gulp.task('dist', ['clean', 'copy', 'webpack'])

gulp.task('watch', ['dist'], () => {
    gulp.watch(['./app/entry.js', './package.json', './app/assets/**/*.*'], ['copy'])
    gulp.watch(['./app/**/*.js', './app/**/*.ejs', './app/**/*.vue', './app/**/*.less', './app/**/*.json'], ['webpack'])
})

gulp.task('default', ['watch'])
