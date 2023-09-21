const {src, dest, series} = require('gulp');
const htmlMin = require('gulp-htmlmin');
const cssMin = require('gulp-cssmin');
const imgMin = require('gulp-imagemin');
const svgMin = require('gulp-svgmin');
const cleanCss = require('gulp-clean-css');
const uglifier = require('gulp-uglify');
const obfuscator = require('gulp-obfuscate');

const fileCopier = () => {
    return src('./**')
    .pipe(dest('dist/'));
}

const htmlMinifier = () => {
    return src('./*.html')
    .pipe(minifyHtml({collapseWhitespace: true}))
    .pipe(dest('dist'));
}

const cssMinifier = () => {
    return src('./*.css')
    .pipe(minifyCss())
    .pipe(dest('dist'));
}

const imgMinifier = () => {
    return src('./img/**')
    .pipe(minifyImg())
    .pipe(dest('dist/img'));
}

exports.fileCopier = fileCopier;
exports.htmlMinifier = htmlMinifier;
exports.cssMinifier = cssMinifier;
exports.imgMinifier = imgMinifier;

exports.default = series(fileCopier, htmlMinifier, cssMinifier, imgMinifier);
