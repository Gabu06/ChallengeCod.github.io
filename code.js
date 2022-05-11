var imensaje = document.getElementById("texto");
var imensaje2 = document.getElementById("resultado");
var btnEncriptar = document.getElementById("encriptar");
var btnDesencriptar = document.getElementById("desencriptar");
var btnCopiar = document.getElementById("copia");

function encriptar (){
    var mensaje= document.getElementById("texto").value.toLowerCase();
    console.log(mensaje);
    var mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");
    console.log(mensajeEncriptado);
    imensaje2.value = mensajeEncriptado;
}

function desencriptar(){
    var mensajeEncriptado= imensaje.value;
    var mensaje = mensajeEncriptado.replaceAll("enter", "e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    imensaje2.value = mensaje;
}
function copiar(){
    const mensajeEncriptado =imensaje2.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    alert("Mensaje copiado");
}
btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;