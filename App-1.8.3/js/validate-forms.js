$(document).ready(function () {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    $('#btnOk').click(function(event){

        if (!forms[0].checkValidity()) {

        }
        forms[0].classList.add('was-validated');
        validateUser();
    });

    /**
     * Muestra una ventana modal con mensajes dados por parametros.
     * @param agParams
     */
    function showMsg(agParams){

        $("#modal-title").text('Acceso denegado');
        $("#modal-description").text(agParams.text);
        $('#modalWindow').modal('show');
    }

    /**
     *
     * @param agEvent
     */
    function validateUser(agEvent) {

        var usuario = $('#txtUser').val();
        var contrasenna = $('#txtPass').val();

        if (usuario == 'prof') {

            if(contrasenna == 'prof'){
                sessionStorage.setItem("AppDIF2.usuario", usuario);
                window.location.href="./prof.html";
            }
            else{
                showMsg({
                    text:'Usuario o Clave incorrectos'
                });
            }

        } else if (usuario == 'jefdep') {

            if(contrasenna == 'jefdep'){
                sessionStorage.setItem("AppDIF2.usuario", usuario);
                window.location.href="./jefdep.html";
            }
            else{
                showMsg({
                    text:'Usuario o Clave incorrectos'
                });
            }

        } else if (usuario == 'jefasig') {

            if(contrasenna == 'jefasig'){
                sessionStorage.setItem("AppDIF2.usuario", usuario);
                window.location.href="./jefasig.html";
            }
            else{
                showMsg({
                    text:'Usuario o Clave incorrectos'
                });
            }
        } else {
           // agEvent.preventDefault();
           // agEvent.stopPropagation();

            showMsg({
                text:'Usuario o Clave incorrectos'
            });
        }
    }
});