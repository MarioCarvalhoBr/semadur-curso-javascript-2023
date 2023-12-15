/*
Autor: Mário de Araújo Carvalho
Descrição: Módulo mateḿatico nodejs
Data: 12/15/2023
E-mail: mario.carvalho@ufms.br
*/

// Função para somar dois números
function soma(a, b) {
    return a + b;
}

// Função para subtrair dois números
function subtracao(a, b) {
    return a - b;
}


// Função para multiplicar dois números
const multiplicacao = (a, b) => {
    return a * b;
}

// Função para dividir dois números
const divisao = (a, b) => {
    return a / b;
}

// Exportando as funções
module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}