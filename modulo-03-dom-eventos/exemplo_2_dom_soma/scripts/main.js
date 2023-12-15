/*
Autor: Mário de Araújo Carvalho
Descrição: Calcula soma
Data: 12/11/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada 
var txt_n1 = document.getElementById('txt_n1');
var txt_n2 = document.getElementById('txt_n2');
var btn_calcular = document.getElementById('btn_calcular');
var saida_resultado = document.getElementById('resultado');

// Processamento
/*
btn_calcular.onclick = function(){
    var n1 = parseFloat(txt_n1.value);
    var n2 = parseFloat(txt_n2.value);
    var soma = n1 + n2;
    saida_resultado.innerText = soma;
}
*/
function soma(){
    let  n1 = parseFloat(txt_n1.value);
    let n2 = parseFloat(txt_n2.value);
    let soma = n1 + n2;
    saida_resultado.innerText = soma;
}

// Com addEventListener
btn_calcular.addEventListener('click', soma);