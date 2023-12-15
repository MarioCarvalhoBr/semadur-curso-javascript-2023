/*
Autor: Mário de Araújo Carvalho
Descrição: Calcula soma
Data: 12/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada 
var titulo = document.getElementById('titulo');

var btn_blue = document.getElementById('btn_blue');
var btn_red = document.getElementById('btn_red');
var btn_green = document.getElementById('btn_green');
var btn_yellow = document.getElementById('btn_yellow');

// Processamento
// Eventos
btn_blue.addEventListener('click', function(){
    titulo.style.color = 'blue';
});
btn_red.addEventListener('click', function(){
    titulo.style.color = 'red';
});

btn_green.onclick = function(){
    titulo.style.color = 'green';
}
btn_yellow.onclick = function(){
    titulo.style.color = 'yellow';
}

// Quando passar o mouse por cima do titulo, alterar o titulo para "Titulo mudou"
titulo.addEventListener('mouseover', function(){
    titulo.innerText = 'Titulo mudou';
})

// Quando clicar na tecla R do teclado, alterar o titulo para "Titulo mudou de novo"
document.addEventListener('keydown', function(event){
    if(event.key == 'r'){
        titulo.innerText = 'Titulo mudou de novo';
    }
});