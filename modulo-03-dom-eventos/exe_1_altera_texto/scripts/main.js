/*
Autor: Mário de Araújo Carvalho
Descrição: Altera texto
Data: 12/13/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada
var btn_alterar = document.getElementById('btn_alterar');
var paragrafo = document.getElementById('paragrafo');
var titulo = document.getElementById('titulo');

// Processamento
btn_alterar.addEventListener('click', function(){
    titulo.innerText = 'Poema 2: Pellentesque Habitant';
    paragrafo.innerText = "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam augue est, tristique a ornare nec, tincidunt et tellus. Praesent ut diam id nisi scelerisque faucibus quis id dolor. Ut quis laoreet urna. Quisque volutpat lorem sapien, id rhoncus magna rhoncus vehicula. Integer pellentesque dapibus urna rhoncus tristique. Sed accumsan imperdiet lacus, sed elementum nunc consequat at. ";
});