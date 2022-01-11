
var sessionUsuario = sessionStorage.getItem('AppDIF2.usuario');

// redireccionar a la pagina del usuario autenticado
if (sessionUsuario != null && sessionUsuario != '') {

    switch (sessionUsuario){

        case 'prof':
        case 'jefdep':
        case 'jefasig':
            redirect(sessionUsuario);
            break;

        default:
            break;
    }
}

/**
 * Redirecciona a una pagina HTML dado su nombre de archivo.
 * @param agPage
 */
function redirect(agPage){
    window.location.href = "./" + agPage + ".html";
}
