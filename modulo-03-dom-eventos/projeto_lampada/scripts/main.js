/*
Autor: Mário de Araújo Carvalho
Descrição: Projeto lampada ligar e desligar
Data: 12/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada 
var btn_ligar = document.getElementById('btn_ligar');
var btn_desligar = document.getElementById('btn_desligar');
var img_lampada = document.getElementById('img_lampada');

// Processamento
btn_ligar.addEventListener('click', function(){
    img_lampada.src = 'lampada_ligada.gif';
});

btn_desligar.addEventListener('click', function(){
    img_lampada.src = 'lampada_apagada.gif';
});