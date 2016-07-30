/*
* Dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-files', function(){
	gulp.src('src/*.js')
		.pipe(concat('lab1.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/'))
});