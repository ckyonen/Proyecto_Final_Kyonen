const formularioContactos = document.querySelector('#contacto');

      eventListeners();




function eventListeners() {
    // Cuando el formulario de crear o editar se ejecuta
    formularioContactos.addEventListener('submit', leerFormulario);



}



function leerFormulario(e) {
    e.preventDefault();

    // Leer los datos de los inputs
  const nombre = document.querySelector('#nombre').value,
        empresa = document.querySelector('#empresa').value,
        telefono = document.querySelector('#telefono').value,
        mail = document.querySelector('#mail').value,
        comentario = document.querySelector('#comentario').value;



  console.log(nombre);



    if(nombre === '' || empresa === '' || telefono === '' || mail === '' || comentario === '') {
        // 2 parametros: texto y clase
        mostrarNotificacion('Todos los Campos son Obligatorios', 'error');

    }else{

        var accion='crear';
        // Pasa la validación, crear llamado a Ajax
        const infoContacto = new FormData();
        infoContacto.append('nombre', nombre);
        infoContacto.append('empresa', empresa);
        infoContacto.append('telefono', telefono);
        infoContacto.append('mail', mail);
        infoContacto.append('comentario', comentario);
        infoContacto.append('accion', accion);

       console.log(...infoContacto);


        if(accion === 'crear'){

            // crearemos un nuevo contacto

            mostrarNotificacion('Mensaje Enviado', 'correcto');

        } else {


            mostrarNotificacion('ha ocurrido un error inesperado', 'error');
        }






    }




    }













// Notifación en pantalla
function mostrarNotificacion(mensaje, clase) {
    const notificacion = document.createElement('div');
    notificacion.classList.add(clase, 'notificacion', 'sombra');
    notificacion.textContent = mensaje;

    // formulario
    formularioContactos.insertBefore(notificacion, document.querySelector('form legend'));

    // Ocultar y Mostrar la notificacion
    setTimeout(() => {
        notificacion.classList.add('visible');
        setTimeout(() => {
            notificacion.classList.remove('visible');
            setTimeout(() => {
                notificacion.remove();
            }, 500)
        }, 3000);
    }, 100);

}






