
let $form = document.getElementById('formulario');

$form.addEventListener('submit', (event) => {

    event.preventDefault();

    let usuario = document.getElementById('usuario');
    let clave = document.getElementById('clave');

    if (usuario.value == '' || clave.value == '') {

        alert('Debe ingresar un Usuario y una Clave para poder avanzar')

    } else if (!usuario.value.includes('@')) {

        alert('El usuario debe contener como caracter especial un arroba (@).')

    } else {

        $form.submit();
        alert(`Se envió el formulario con el usuario ${usuario.value} y clave ${clave.value}`)
        
    }
})
