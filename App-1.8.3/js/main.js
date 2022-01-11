/**
 *
 */
function cancelform(){
    $('#rightPanel').trigger("reset");
    $("#rightPanel").removeClass('was-validated');

    showMsg({
        title:'Nota',
        text:'Ha hecho click en el bot&oacute;n Cancelar, los campos del formulario han sido limpiados.'
    });
}

/**
 * Muestra una ventana modal con mensajes dados por parametros.
 * @param agParams
 */
function showMsg(agParams){

    $("#modal-title").text(agParams.title);
    $("#modal-description").html(agParams.text);
    $('#modalWindow').modal('show');
}

$(document).ready(function () {

    feather.replace({ 'aria-hidden': 'true' })

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {

                }else{

                    showMsg({
                        title:'Nota',
                        text:'Los datos recogidos en el formulario deben ser procesados en el servidor en el futuro.'
                    });
                }
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            }, false)
        });

    // Plan de trabajo
    $("#btnCrearPlan").click(function () {
        setActive('btnCrearPlan', this,
            'crear_plan_de_trabajo');
    });

    $("#btnModificarPlanTrabajo").click(function () {
        setActive('btnModificarPlanTrabajo', this,
            'crear_plan_de_trabajo');
    });

    $("#btnEliminarPlanTrabajo").click(function () {
        setActive('btnEliminarPlanTrabajo', this,
            'crear_plan_de_trabajo');
    });

    $("#btnBuscarPlanTrabajo").click(function () {
        setActive('btnBuscarPlanTrabajo', this,
            'crear_plan_de_trabajo');
    });

    // Plan de clases
    $("#btnCrearPlanClases").click(function () {
        setActive('btnCrearPlanClases', this,
            'crear_plan_de_clases');
    });

    $("#btnModificarPlanClases").click(function () {
        setActive('btnModificarPlanClases', this,
            'crear_plan_de_clases');
    });

    $("#btnEliminarPlanClases").click(function () {
        setActive('btnEliminarPlanClases', this,
            'crear_plan_de_clases');
    });

    $("#btnMostrarPlanClases").click(function () {
        setActive('btnMostrarPlanClases', this,
            'crear_plan_de_clases');
    });

    // Generales
    $("#designarJefeAsignatura").click(function () {
        setActive('designarJefeAsignatura', this,
            'designar_jefe_de_asignatura');
    });

    $("#controlarLasClases").click(function () {
        setActive('controlarLasClases', this, 'controlar_las_clases');
    });

    $("#enviarNota").click(function () {
        setActive('enviarNota', this, 'enviar_nota');
    });

    $("#evaluarProfesor").click(function () {
        setActive('evaluarProfesor', this, 'evaluar_profesor');
    });

    $("#enviarPlanTrabajo").click(function () {
        setActive('enviarPlanTrabajo', this, 'enviar_plan_de_trabajo');
    });

    // Salir (logout)
    $("#btnSalir").click(function () {
        sessionStorage.removeItem("AppDIF2.usuario");
        window.location.href = "./index.html";
    });

   /* $("#rightPanel").on('DOMSubtreeModified', function(){
        $("textarea").val('');
    });*/

    /**
     * Activar el link de identificador 'agLinkName' y desactivar los demas links
     * @param agLinkName
     * @param link
     * @param agHtml
     */
    function setActive(agLinkName, link, agHtml) {

        $('#headTextRequest').text(link.text);
        $('#' + agLinkName).addClass('active');

        $("#rightPanel").load('./forms/' + agHtml + '.html');

        // obtener todos los links del panel izquierdo
        var navLinks = document.querySelectorAll('.nav-link');

        // Recorrer la lista de enlaces y desactivar la clase 'active'
        Array.prototype.slice.call(navLinks).forEach(
            function (link) {
                if (link.id != agLinkName) {
                    link.classList.remove('active');
                }
            });

        $("#rightPanel").removeClass('was-validated');

        setTimeout(function () {
            $('#datepicker').datepicker();
        }, 1000);
    }
});