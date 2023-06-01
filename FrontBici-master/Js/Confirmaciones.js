var btnContinuar = document.getElementById("btn-cancelar");
var btnRodar = document.getElementById("btn-cancelar");
var btnViajar = document.getElementById("btn-viajar");
var btnCompra = document.getElementById("btn-viajar");

btnRodar.addEventListener("click", irInicio);
btnContinuar.addEventListener("click", irSeleccionPlan);
btnViajar.addEventListener("click", irSeleccionPlan);
btnCompra.addEventListener("click", irConfirmacionPlan);

function irInicio() {
    window.location.href = "Inicio.html";
  }
function irSeleccionPlan(){
    window.location.href = "Seleccion-plan.html";
}
function iniciarViaje(){
  window.location.href = "Tiempo-Costo.html";
}
function irConfirmacionPlan(){
  window.location.href = "Confirmacion-Plan.html";
}