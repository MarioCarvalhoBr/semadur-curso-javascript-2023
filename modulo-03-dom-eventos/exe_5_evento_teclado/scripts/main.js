/*
Autor: Mário de Araújo Carvalho
Descrição: Pegar as teclas do teclado e imprimir na tela teclas
Data: 12/13/2023
E-mail: mario.carvalho@ufms.br
*/

let teclas = document.getElementById("teclas");

document.addEventListener("keydown", function (teclado) {
  teclas.innerText += teclado.key; // teclas.innerHTML = teclas.innerHTML + teclado.key;
  // gUARDAR EM UM ARQUIVO .TXT O QUE O USUARIO DIGITOU
    localStorage.setItem("teclas", teclas.innerHTML);
    
});

let paragrafo = document.getElementById("paragrafo");
// Identificar se o usuario digitou CTRL + C, caso positivo, exibir uma mensagem: Você não pode copiar o texto
document.addEventListener("keydown", function (teclado) {
  if (teclado.ctrlKey && teclado.key === "c") {
    paragrafo.innerText = "Você não pode copiar o texto";
  }
});