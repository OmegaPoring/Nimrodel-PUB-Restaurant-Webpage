function mostrar_com(){
    var elemento = document.getElementById('Comuniquemonos');
    elemento.style.display = "block";
}

function mostrar_res(){
    var elemento = document.getElementById('Reserva');
    elemento.style.display = "block";
}

function ocultarsm(){
    var anchoPantalla = window.outerWidth;
    if (anchoPantalla <= 540) {
        var com = document.getElementById('Comuniquemonos');
        var res = document.getElementById('Reserva');
        com.style.display = 'none';
        res.style.display = 'none';
    }else{
        var com = document.getElementById('Comuniquemonos');
        var res = document.getElementById('Reserva');
        com.style.display = 'block';
        res.style.display = 'block';
    }
  }

$(document).ready(function(){
    $("#contenido_beb").click(function(accion){
        $("#contenido_beb_hid").show();
        $("#fondo_pop").show();
    })
})

$(document).ready(function(){
    $("#contenido_tab").click(function(accion){
        $("#contenido_tab_hid").show();
        $("#fondo_pop").show();
    })
})

$(document).ready(function(){
    $("#contenido_schop").click(function(accion){
        $("#contenido_schop_hid").show();
        $("#fondo_pop").show();
    })
})

$(document).ready(function(){
    $("#sobre_nosotros").click(function(accion){
        $("#carousel_sobnos").show();
        $("#fondo_pop").show();
    })
})

$(document).ready(function(){
    $("#fondo_pop").click(function(accion){
        $("#contenido_beb_hid").hide();
        $("#contenido_tab_hid").hide();
        $("#contenido_schop_hid").hide();
        $("#carousel_sobnos").hide();
        $("#fondo_pop").hide();
    })
})

$(document).ready(function (){
    $("#com_but").click(function(){
        var name = $("#Nombre_com").val();
        var email = $("#Correo_com").val();
        var telefono = $("#Telefono_com").val();
        var motivo = $("#Motivo_com").val();
        var comentario = $("#Comentario").val();

    if(name==''){
        alert("El campo 'Nombre' es obligatorio")
    }else if (email==''){
        alert("El campo 'Correo' es obligatorio")
    }else if (telefono==''){
        alert("El campo 'Telefono' es obligatorio")
    }else if (fecha==''){
        alert("El campo 'Fecha' es obligatorio")
    }else if (hora==''){
        alert("El campo 'Hora' es obligatorio")
    }else if (asistentes==''){
        alert("El campo 'Asistentes' es obligatorio")
    }else{
    alert("Muchas Gracias "+name+"!, se ha ingresado tu reserva con fecha "+fecha+" a las "+hora+", hemos enviado el codigo de confirmacion a su correo "+email+".\nGracias por su preferencia!");
    }
  })
})



$(document).ready(function (){
    $("#res_but").click(function(){
    var name = $("#Nombre_res").val();
    var email = $("#Correo_res").val();
    var telefono = $("#Telefono_res").val();
    var fecha = $("Fecha_res").val();
    var hora = $("#Hora_res").val();
    var asistentes = $("#Asistentes_res").val();

    if(name==''){
        alert("El campo 'Nombre' es obligatorio")
    }else if (email==''){
        alert("El campo 'Correo' es obligatorio")
    }else if (telefono==''){
        alert("El campo 'Telefono' es obligatorio")
    }else if (fecha==''){
        alert("El campo 'Fecha' es obligatorio")
    }else if (hora==''){
        alert("El campo 'Hora' es obligatorio")
    }else if (asistentes==''){
        alert("El campo 'Asistentes' es obligatorio")
    }else{
    alert("Muchas Gracias "+name+"!, se ha ingresado tu reserva con fecha "+fecha+" a las "+hora+", hemos enviado el codigo de confirmacion a su correo "+email+".\nGracias por su preferencia!");
    }
  })
})
