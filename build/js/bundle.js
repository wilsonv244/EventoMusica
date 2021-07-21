console.log('estamos ready');
document.addEventListener('DOMContentLoaded', function(){ ///espera que todo el archivo html este listo
    crearimagen();
});


function crearimagen(){
    const galeria = document.querySelector('.galeriaI');
    
    for(let i =1; i<= 12;i++){
        const imagen = document.createElement('IMG');
        imagen.src= `build/img/thumb/${i}.jpg`;

        //MOSTRAR ELEMENTOS A LA WEB
        const lista = document.createElement('LI');
        
        lista.appendChild(imagen);
        galeria.appendChild(lista);

    }
}