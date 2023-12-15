/*
Autor: Mário de Araújo Carvalho
Descrição: Criar uma Função de Multiplicação: Escreva uma função que
multiplica dois números.
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Declaração da função
function multiplicacao(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

// Entrada 
let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

// Processamento
let resultado = multiplicacao(num1, num2);

// Saída
console.log(`O resultado da multiplicação de ${num1} * ${num2} = ${resultado}`);