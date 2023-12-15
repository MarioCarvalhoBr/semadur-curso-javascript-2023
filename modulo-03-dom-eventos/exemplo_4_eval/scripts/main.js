/*
Autor: Mário de Araújo Carvalho
Descrição: Calculara expressão eval
Data: 12/11/2023
E-mail: mario.carvalho@ufms.br
*/

let txt_expressao = document.getElementById('txt_expressao');
let btn_calcular = document.getElementById('btn_calcular');
let saida_resultado = document.getElementById('resultado');

// Caso o usuário clique no botão, chama a função calcular
btn_calcular.onclick = function(){
    let expressao = txt_expressao.value;
    let resultado = eval(expressao);
    saida_resultado.innerText = resultado;
}