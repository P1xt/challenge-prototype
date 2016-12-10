var gulp = require('gulp');
var mocha = require('gulp-mocha');
var browserSync = require('browser-sync').create();

gulp.task('test', function() {
    gulp.src(['./challenges/arrays/**/*spec.js', '!./challenges/arrays/**/demo/*spec.js'])
        .pipe(mocha({ reporter: 'mochawesome',
            reporterOptions: {
            reportDir: 'reports/arrayChallenge/results',
            reportName: 'index',
            reportTitle: 'Array Challenge',
            inlineAssets: true
            }
        })
    );
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./reports/"
        }
    });
});
gulp.task('dev', ['test', 'browser-sync']);