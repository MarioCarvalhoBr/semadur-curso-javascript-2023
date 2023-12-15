/*
Autor: Mário de Araújo Carvalho
Descrição: Calcular a área de um círculo usando uma função. 
PEça para o usuário informar o raio do círculo.
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Declaração de função com parâmetro e retorno
// Função para calcular a área de um círculo
function areaCirculo(raio) {
    // Função para calcular a área de um círculo
    const PI = 3.141592653589793;
    let area = PI * raio * raio;
    return area;
}

// ENTRADA
let raio = prompt("Informe o raio do círculo: ");
raio = parseFloat(raio);

// PROCESSAMENTO
let area_circulo = areaCirculo(raio);

// SAÍDA
console.log("O raio do círculo é: " + raio);
console.log("A área do círculo é: " + area_circulo);

let raio2 = prompt("Informe o raio do círculo: ");
raio2 = parseFloat(raio2);

let area_circulo2 = areaCirculo(raio2);

console.log("O raio do círculo é: " + raio2);
console.log("A área do círculo é: " + area_circulo2);