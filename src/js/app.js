document.addEventListener('DOMContentLoaded', function () {
    scrolUp();
    headerStatic();
    scrolNav();
    // botonup();
})
function scrolNav() {
    const enlaces = document.querySelectorAll('.navegacion a');
    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click',function (e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);
            
            seccion.scrollIntoView({behavior: 'smooth'});
        })
    })     
}

function headerStatic() {
    const header = document.querySelector('#header');
    const lugarStatic = document.querySelector('.line-up');
    const bodyF = document.querySelector('body');

    const botonArriba = document.querySelector('.up');
    
    window.addEventListener('scroll',function () {
        console.log(lugarStatic.getBoundingClientRect())
        if(lugarStatic.getBoundingClientRect().top < -8){
            header.classList.add('header-static');
            bodyF.classList.add('scroll-body');
            botonArriba.classList.add('ocultarBoton');
            
        }else{
            header.classList.remove('header-static');
            bodyF.classList.remove('scroll-body');
            botonArriba.classList.remove('ocultarBoton');
        }
        
    })
    
}
function scrolUp() {
    const arriba = document.querySelector('#scrool-up')
    arriba.addEventListener('click',function (e) {
        e.preventDefault();
        console.log(e.target.attributes.href.value)
        const seccion = document.querySelector(e.target.attributes.href.value)
        seccion.scrollIntoView({
            behavior: 'smooth',
        });
    })
}
function botonup() {
    // const ref = useRef(null);
    const botonArriba = document.querySelector('.up');
    const lugarStatic = document.querySelector('.anuncio');
    window.addEventListener('scroll', function () {
        // console.log(lugarStatic.getBoundingClientRect())
        
        // if (!botonArriba.current) return 
        if (lugarStatic.getBoundingClientRect().top < 493) {
            console.log('estas ahi');
            botonArriba.classList.add('ocultarBoton');
        }else{
            console.log('te Pasaste hee...');
            botonArriba.classList.remove('ocultarBoton');
        }
    })
}