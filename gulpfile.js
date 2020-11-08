const {src, dest, series} = require('gulp');
const minifyHtml = require('gulp-html-minimizer');
const minifyCss = require('gulp-cssnano');
const minifyImg = require('gulp-imagemin');

const FileCopier = () => {
    return src('./**')
    .pipe(dest('dist'));
}

const HTMLMinifier = () => {
    return src('./*.html')
    .pipe(minifyHtml({collapseWhitespace: true}))
    .pipe(dest('dist'));
}

const CSSMinifier = () => {
    return src('./*.css')
    .pipe(minifyCss())
    .pipe(dest('dist'));
}

const IMGMinifier = () => {
    return src('./img/**')
    .pipe(minifyImg())
    .pipe(dest('dist/img'));
}

exports.FileCopier = IMGMinifier;
exports.HTMLMinifier = HTMLMinifier;
exports.CSSMinifier = CSSMinifier;
exports.IMGMinifier = IMGMinifier;

exports.default = series(FileCopier, HTMLMinifier, CSSMinifier, IMGMinifier);