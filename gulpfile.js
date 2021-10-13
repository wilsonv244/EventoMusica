const{series, parallel, src, dest, watch} = require('gulp');
//watch, registra las actividades cambiantes y lo vuelve a ejecutar otra vez
const sass = require('gulp-sass');
const imagenmin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
//comprimir archivos
const plumber = require('gulp-plumber')
const concat = require('gulp-concat'); //para compilar el JS
const cssnano = require('cssnano'); //comprimira los estilos
const autoprefixer = require('autoprefixer');//este realizara que sea compatible con otros navegadores
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
//javaScript
const terser = require('gulp-terser-js');
//funciones//
const paths = {
    imagenes : 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}
function css(done ){
        src(paths.scss)
            .pipe(sourcemaps.init())
            .pipe(plumber())
            .pipe( sass())
            .pipe(postcss([autoprefixer(), cssnano()]))//mejoras del css
            .pipe(sourcemaps.write('.'))
            .pipe( dest ('./build/css'))
        done()
}
function minificar( ){
    return src(paths.scss)
        .pipe( sass({
            outputStyle: 'compressed'
        }))
        .pipe( dest ('./build/css'))
}
function javascript(){
    return src(paths.js)
        .pipe(terser())
        .pipe(sourcemaps.init())
        .pipe( concat('bundle.js'))
        .pipe(dest('./build/js'))
}
function imagenes(){
    return src(paths.imagenes)
        .pipe(imagenmin ())
        .pipe( dest('././build/img'))
        .pipe( notify({message: 'Imagen Minificada'}));
}
function versionwebp(){
    return src(paths.imagenes)
        .pipe(webp () )
        .pipe(dest ('./build/img'))
        .pipe( notify ({message: 'version Weblista'}));
}
function watcharchivos(){   //que se actualice
    watch( 'src/scss/**/*.scss', css); //*= la carpeta actual **= todos los archivos
    watch(paths.js, javascript);
}

exports.css = css;
exports.minificar = minificar;
exports.watcharchivos= watcharchivos;
exports.imagenes = imagenes;
exports.versionwebp = versionwebp;
exports.javascript = javascript;
exports.default = series( css, javascript, imagenes, watcharchivos, versionwebp);








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