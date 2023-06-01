
var btnRegistro = document.getElementById("registrarEstaciones");
var btnVerEstaciones = document.getElementById("verEstaciones");
var btnVolver = document.getElementById("btn-volver");


btnRegistro.addEventListener("click", registrarEstacionesBici);
btnVerEstaciones.addEventListener("click", irVerEstaciones);
btnVolver.addEventListener("click", volverInicio);



function registrarEstacionesBici(){
    window.location.href = "AdminRegistroBici.html";
}

function irVerEstaciones(){
    window.location.href = "AdminEstaciones.html";
}


function volverInicio(){
    window.location.href = "InicioAdmin.html";
}
