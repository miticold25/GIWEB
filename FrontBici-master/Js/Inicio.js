
var btnVerEstaciones = document.getElementById("verEstaciones");
var btnVerViajes = document.getElementById("verViajes");
var btnVerPlan = document.getElementById("verPlan");
var btnRodar = document.getElementById("rodar");


btnVerEstaciones .addEventListener("click", irVerEstaciones);
btnVerViajes.addEventListener("click", VerViajes);
btnVerPlan.addEventListener("click", verPlan);
btnRodar.addEventListener("click", rodar);


function irVerEstaciones(){
    window.location.href = "Estaciones.html";
}

function VerViajes(){
    window.location.href = "HistorialViajes.html";
}

function verPlan(){
    window.location.href = "MiPlan.html";

}

function rodar(){
    window.location.href = "Planear-viaje.html";
}
