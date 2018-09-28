var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    jshint = require('gulp-jshint');

gulp.task('lint', () => {
    gulp.src('./**/*.js')
        .pipe(jshint());
});

gulp.task('develop', () => {
    let stream = nodemon({
        script: 'app.js',
        ext: 'html js',
        ignore: ['ignored.js'],
        tasks: ['lint']
    });

    stream.on('restart', () => {
        console.log('Restarted!');
    })
    .on('crash', () => {
        console.log('Application has crashed!\n');
        stream.emit('restart', 10);
    });

});

gulp.task('start', () => {
    nodemon({
        script: 'app.js',
        ext: 'js html',
        env: {'NODE_ENV': 'development'}
    });
});