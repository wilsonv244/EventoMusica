
const{series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const imagenmin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
//funciones//
const paths = {
    imagenes = 'src/img/**/*',
}
function css( ){
    return src('src/scss/app.scss')
        .pipe( sass())
        .pipe( dest ('./build/css'))
}
function minificar( ){
    return src('src/scss/app.scss')
        .pipe( sass({
            outputStyle: 'compressed'
        }))
        .pipe( dest ('./build/css'))
}
function imagenes(){
    return src(paths.imagenes)
        .pipe(imagenmin ())
        .pipe( dest('./build/img'))
        .pipe( notify({message: 'Imagen Minificada'}));
}
function versionwebp(){
    return src(paths.imagenes)
    .pipe(webp ( ))
    .pipe(dest ('./build/img'))
    .pipe( notify ({ message: 'version Weblista'}));
}
function watcharchivos(){
    watch( 'src/scss/**/*.scss', css); //*= la carpeta actual **= todos los archivos
}

exports.css = css;
exports.minificar = minificar;
exports.watcharchivos= watcharchivos;
exports.imagenes = imagenes;
exports.versionwebp = versionwebp;
exports.default = series( css, imagenes, watcharchivos, versionwebp);








//PRACTICANDO//
/*function hola( done ){
    console.log('Hola mundo En Gulp');
    done();
}
function javascript(done){
    console.log('compilando en javaScript');
    done();
}
function print(done){
    console.log('practicando ando');
    done();
}

exports.hola = hola;
exports.javascript = javascript;
exports.default = parallel (hola, javascript, print);*/