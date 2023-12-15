/*
Autor: Mário de Araújo Carvalho
Descrição: Converter função em arrow function
Data: 12/14/2023
E-mail: mario.carvalho@ufms.br
*/

// Função tradicional
function es_5_multiplicacao(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}
// Função arrow function 1
const es_6_multiplicacao_1 = (num1, num2) => {
    let resultado = num1 * num2;
    return resultado;
}

// Função arrow function 2
const es_6_multiplicacao_2 = (num1, num2) => num1 * num2;


// Função tradicional
function es_5_verificaParImpar(numero){
    if(numero % 2 == 0){
        return "Par";
    }else{
        return "Ímpar";
    }
}
// Função arrow function 1
const es_6_verificaParImpar_1 = (numero) => {
    if(numero % 2 == 0){
        return "Par";
    }else{
        return "Ímpar";
    }
}
// Função arrow function 2
const es_6_verificaParImpar_2 = (numero) => numero % 2 == 0 ? "Par" : "Ímpar"; // If ternário
// IF TERNAŔIO: condição ? true : false. O if ternário é uma forma de simplificar o if tradicional

// Função tradicional
function es_5_areaCirculo(raio) {
    // Função para calcular a área de um círculo
    const PI = 3.141592653589793;
    let area = PI * raio * raio;
    return area;
}
// Função arrow function 1
const es_6_areaCirculo_1 = (raio) => {
    // Função para calcular a área de um círculo
    const PI = 3.141592653589793;
    let area = PI * raio * raio;
    return area;
}
// Função arrow function 2
const es_6_areaCirculo_2 = (raio) => 3.141592653589793 * raio * raio;

// Chamar todas as funções
console.log(es_5_multiplicacao(2, 3));
console.log(es_5_verificaParImpar(3));
console.log(es_5_areaCirculo(3));
console.log("--------------------------------------------------");
console.log(es_6_multiplicacao_1(2, 3));
console.log(es_6_verificaParImpar_1(3));
console.log(es_6_areaCirculo_1(3));

let nome = "Mário";
let sobrenome = "Carvalho";
let nome_completo = `${nome} ${sobrenome}`;