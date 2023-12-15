/*
Autor: Mário de Araújo Carvalho
Descrição: Imprimir a tabuada de um número n fornecido pelo usuário
Data: 06/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada
var numero = parseInt(prompt("Digite um número: "));

// Processamento
// Tabuada da adição
console.log("Tabuada da adição");
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} + ${i} = ${numero + i}`); 
    // console.log(numero + " + " + i + " = " + (numero + i));
}
console.log("Tabuada da subtração");
for (let i = 1; i <= 10; i++) {
    console.log(`${i} - ${numero} = ${ i - numero}`); 
    // console.log(numero + " - " + i + " = " + (numero - i));
}

console.log("Tabuada da multiplicação");
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} * ${i} = ${numero * i}`); 
    // console.log(numero + " * " + i + " = " + (numero * i));
}

console.log("Tabuada da divisão");
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} / ${i} = ${numero / i}`); 
    // console.log(numero + " / " + i + " = " + (numero / i));
}