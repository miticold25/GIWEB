var btnLogear = document.getElementById("btn-login");
var btnRegistrar = document.getElementById("btn-register");
var btnLogin = document.getElementById("btn-loger");

btnLogear.addEventListener("click", irInicio);
btnRegistrar.addEventListener("click",  irRegister);
btnLogin.addEventListener("click", irLogin );


function irInicio() {
    window.location.href = "Inicio.html";
  }
function irRegister(){
    window.location.href = "Register.html";
}
function irLogin(){
    window.location.href = "Login.html";
}
