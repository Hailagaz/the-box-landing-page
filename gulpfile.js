const { src, dest, series } = require('gulp');

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function js() {
	return src('js/*.js')
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat('index-min.js'))
		.pipe(dest('output/'));
}

function css() {
	return src('scss/*.scss')
		.pipe(sass())
		.pipe(concat('index.css'))
		.pipe(dest('output/'));
}

exports.default = series(js, css);