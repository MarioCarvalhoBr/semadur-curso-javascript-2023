/*
Autor: Mário de Araújo Carvalho
Descrição: Exemplos de uso de funções
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Declaração de função
function hello() {
    // Corpo da função
    console.log("Olá, você está no curso de JavaScript Básico");
}

// Chamada de função
hello();
hello();
hello();
hello();

// Declaração de função com parâmetro: nome
function boasVindas(nome) {
    console.log("Olá " + nome + ", seja bem vindo(a)!");
    // ${nome} - interpolação
    // console.log(`Olá ${nome}, seja bem vindo(a)!`);
}

// Chamada de função com parâmetro: nome
boasVindas("Mário");
boasVindas("Lucas");
boasVindas("Laura");
boasVindas(777);

// Declaração de função com parâmetro e retorno

function soma(a, b) {
    let soma = a + b + 10;
    return soma;
}

// Chamada de função com parâmetro e retorno
let resultado = soma(10, 20);
console.log("Resultado da soma: " + resultado);

resultado = soma(100, 200);
console.log("Resultado da soma: " + resultado);

resultado = soma(1000, 2000);
console.log("Resultado da soma: " + resultado);

// Declaração de função com parâmetro e retorno e impressão
function mulriplicacao(a, b) {
    let mult = a * b;
    console.log("Multimplicando " + a + " * " + b + " = " + mult);
    return mult;
}

// Chamada de função com parâmetro e retorno e impressão
resultado = mulriplicacao(10, 20);
console.log("Resultado da multiplicação: " + resultado);