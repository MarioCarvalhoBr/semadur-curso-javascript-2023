/*
Autor: Mário de Araújo Carvalho
Descrição: Funcionalidades da calculadora: soma, subtração, multiplicação e divisão.

Data: 12/14/2023
E-mail: mario.carvalho@ufms.br
*/

// Função de soma
function soma(a, b) {
    return a + b;
}

// Função de subtração
function subtracao(a, b) {
    return a - b;
}

// Função de multiplicação
function multiplicacao(a, b) {
    return a * b;
}

// Função de divisão
function divisao(a, b) {
    if (b == 0) {
        return "Não é possível dividir por zero";
    }
    return a / b;
}

export const PI = 3.14;
export function areaCirculo(raio) {
    return PI * raio * raio;
}

// Exportar todas as funções
export { soma, subtracao, multiplicacao, divisao };
