/*
Autor: Mário de Araújo Carvalho
Descrição: Projeto lampada ligar e desligar
Data: 12/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada 
var btn_ligar = document.getElementById('btn_ligar');
var btn_desligar = document.getElementById('btn_desligar');
var estado_lampada = document.getElementById('estado');

// Processamento
btn_ligar.addEventListener('click', function(){
    estado_lampada.innerText = 'Ligada';
    estado_lampada.style.color = 'yellow';
});

btn_desligar.addEventListener('click', function(){
    estado_lampada.innerText = 'Desligada';
    estado_lampada.style.color = 'black';
});

