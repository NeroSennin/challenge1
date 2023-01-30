var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var dibujo = document.querySelector(".dibujo");
var h3 = document.querySelector(".texto1");
var parrafo = document.querySelector(".texto2");
var resultado = document.querySelector(".txtResultado");
var botonCopiar = document.querySelector(".btn-copiar"); 

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function esconder(){
    dibujo.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function tomarText(){
    var area = document.querySelector(".text-input");
    return area.value;

}

function encriptar(){
    esconder();
    resultado.textContent = encriptarTexto(tomarText());
}

function desencriptar(){
    esconder();
    resultado.textContent = desencriptarTexto(tomarText());
}

function copiar(){
    var contenido = document.querySelector(".txtResultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "ai"
        }
        else if (texto[i] == "e") {
            textofinal = textofinal + "enter"
        }
        else if (texto[i] == "i") {
            textofinal = textofinal + "imes"
        }
        else if (texto[i] == "o") {
            textofinal = textofinal + "ober"
        }
        else if (texto[i] == "u") {
            textofinal = textofinal + "ufat"
        }
        else{
            textofinal = textofinal+ texto[i];
        }
    }
    return textofinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textofinal = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textofinal = textofinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e") {
            textofinal = textofinal + "e"
            i = i+4;
        }
        else if (texto[i] == "i") {
            textofinal = textofinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o") {
            textofinal = textofinal + "o"
            i = i+3;
        }
        else if (texto[i] == "u") {
            textofinal = textofinal + "u"
            i = i+3;
        }
        else{
            textofinal = textofinal+ texto[i];
        }
    }
    return textofinal;
}


