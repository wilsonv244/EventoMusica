
const{series, parallel, src, dest, watch} = require('gulp');
const sass = require('gulp-sass');

//funciones//

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
function watcharchivos(){
    watch( 'src/scss/**/*.scss', css); //*= la carpeta actual **= todos los archivos
}

exports.css = css;
exports.minificar = minificar;
exports.watcharchivos= watcharchivos;








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