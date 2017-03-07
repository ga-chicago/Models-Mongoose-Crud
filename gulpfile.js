var gulp	= require('gulp');
var less	= require('gulp-less');
var watch	= require('gulp-watch');

// first argument is an array of files
// second argument is an array of tasks to run
gulp.task('watch', function() {
	gulp.watch(['./server/public/styles/*.less'], ['compile-less']);
})

gulp.task('compile-less', function() {
	gulp.src('./server/public/styles/styles.less')
	.pipe(less())
	.pipe(gulp.dest('./server/public/styles/'));
})

// default task
gulp.task('default', ['compile-less', 'watch']);