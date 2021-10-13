document.addEventListener('DOMContentLoaded', function(){ ///espera que todo el archivo html este listo
    crearimagen();
});
// alert('hola');

function crearimagen(){
    const galeria = document.querySelector('.galeriaI');
    
    for(let i =1; i<= 12;i++){
        const imagen = document.createElement('IMG');
        imagen.src= `build/img/thumb/${i}.jpg`;
        imagen.dataset.imagenId = i;
         //MOSTRAR ELEMENTOS A LA WEB
        imagen.onclick = mostrarI;

        const lista = document.createElement('LI');
        
        lista.appendChild(imagen);
        galeria.appendChild(lista);
        
    }
}

function mostrarI(e) {
    const id = parseInt(e.target.dataset.imagenId);

    //seleccionando la  imagen
    const imagenBig = document.createElement('IMG');
    imagenBig.src = `build/img/grande/${id}.jpg`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagenBig);
    overlay.classList.add('overlay');
    //AGREGANDO BOTON   
    const boton = document.createElement('P');
    boton.textContent = 'X';
    boton.classList.add('bt-cerrar');

    // boton.classList.add('overlay');
    overlay.appendChild(boton);

    boton.addEventListener('click', function () {
        overlay.remove();
        // imagenBig.remove();
    })
    overlay.addEventListener('click',function () {
        overlay.remove();
    })

    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('scroolbody');
}