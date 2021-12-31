const {src, dest, series} = require('gulp');
const minifyHtml = require('gulp-html-minimizer');
const minifyCss = require('gulp-cssnano');
const minifyImg = require('gulp-imagemin');

const fileCopier = () => {
    return src('./**')
    .pipe(dest('dist'));
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