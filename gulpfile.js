const {src, dest, series} = require('gulp');
const htmlMin = require('gulp-htmlmin');
const cssMin = require('gulp-cssmin');
const imgMin = require('gulp-imagemin');
const svgMin = require('gulp-svgmin');
const cleanCss = require('gulp-clean-css');
const uglifier = require('gulp-uglify');
const obfuscator = require('gulp-obfuscate');

const copyFiles = () => {
    return src('./**')
    .pipe(dest('dist/'));
}

const minifyHtml = () => {
    return src('./*.html')
    .pipe(minifyHtml({collapseWhitespace: true}))
    .pipe(dest('dist'));
}

const minifyCss = () => {
    return src('./*.css')
    .pipe(minifyCss())
    .pipe(dest('dist'));
}

const minifySvg = () => {
    return src('./img/**')
    .pipe(minifyImg())
    .pipe(dest('dist/img'));
}

const cleanCss = () => {
    return src('./img/**')
    .pipe(minifyImg())
    .pipe(dest('dist/img'));
}

const uglify = () => {
    return src('./img/**')
    .pipe(minifyImg())
    .pipe(dest('dist/img'));
}

const obfuscate = () => {
    return src('./img/**')
    .pipe(minifyImg())
    .pipe(dest('dist/img'));
}

exports.copyFiles = copyFiles;
exports.minifyHtml = minifyHtml;
exports.minifyCss = minifyCss;
exports.minifyImg = minifyImg;
exports.minifySvg = minifySvg;
exports.cleanCss = cleanCss;
exports.uglify = uglify;
exports.obfuscate = obfuscate;

exports.default = series(copyFiles, minifyHtml, minifyCss, minifyImg, minifySvg, cleanCss, uglify, obfuscate);
