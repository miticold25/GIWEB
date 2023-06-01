var btnAceptar = document.getElementById("btn-aceptar");
var btnCancelar = document.getElementById("btn-cancelar");

btnAceptar.addEventListener("click", aceptar);
btnCancelar.addEventListener("click",  cancelar);


function aceptar(){
    window.location.href = "Metodo-pago.html";
}
function cancelar(){
    window.location.href = "Seleccion-plan.html";
}



function mostrarOcasional(){
    document.getElementById('contenedor-viaje-ocasional').style.display = 'block';
    document.getElementById('contenedor-planes').style.display = 'none';
    document.getElementById('contenedor-viaje-diario').style.display = 'none';
    document.getElementById('contenedor-viaje-mensual').style.display = 'none';
    document.getElementById('contenedor-viaje-anual').style.display = 'none';

}

function mostrarDiario(){
    document.getElementById('contenedor-viaje-diario').style.display = 'block';
    document.getElementById('contenedor-planes').style.display = 'none';
    document.getElementById('contenedor-viaje-ocasional').style.display = 'none';
    document.getElementById('contenedor-viaje-mensual').style.display = 'none';
    document.getElementById('contenedor-viaje-anual').style.display = 'none';

}

function mostrarMensual(){
    document.getElementById('contenedor-viaje-mensual').style.display = 'block';
    document.getElementById('contenedor-planes').style.display = 'none';
    document.getElementById('contenedor-viaje-anual').style.display = 'none';
    document.getElementById('contenedor-viaje-diario').style.display = 'none';
    document.getElementById('contenedor-viaje-ocasional').style.display = 'none';


   
}
function mostrarAnual(){
    document.getElementById('contenedor-viaje-anual').style.display = 'block';
    document.getElementById('contenedor-viaje-diario').style.display = 'none';
    document.getElementById('contenedor-viaje-mensual').style.display = 'none';
    document.getElementById('contenedor-viaje-ocasional').style.display = 'none';
    document.getElementById('contenedor-planes').style.display = 'none';

}

