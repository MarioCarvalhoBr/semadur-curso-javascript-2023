/*
Autor: Mário de Araújo Carvalho
Descrição: Aletrar os estilos usando DOM. cor, tamanho da fonte
Data: 12/13/2023
E-mail: mario.carvalho@ufms.br
*/

let titulo = document.getElementById("titulo");
let paragrafo = document.getElementById("paragrafo");
let botao = document.getElementById("botao");

botao.addEventListener("click", function () {
    titulo.style.color = "red";
    titulo.style.fontSize = "50px";
    titulo.style.fontFamily = "monospace"; // Outras fontes: Arial, Verdana, sans-serif, serif, cursive, fantasy, monospace
   
    paragrafo.style.color = "blue";
    paragrafo.style.fontSize = "30px";
    // Justificar o texto
    paragrafo.style.textAlign = "right";

    paragrafo.style.fontFamily = "monospace";
    paragrafo.style.fontWeight = "bold";

    });

// Ao clicar na tecla T do tecaldo, o titulo e o paragrafo ficam em negrito
let body = document.querySelector("body");
body.addEventListener("keydown", function(evento){
    if (evento.key == "t"){
        titulo.style.fontWeight = "bold";
        paragrafo.style.fontWeight = "bold";
    }
});