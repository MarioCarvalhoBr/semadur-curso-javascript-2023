/*
Autor: Mário de Araújo Carvalho
Descrição: Inversão de Array: Crie um array e escreva um código para
inverter sua ordem.
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada 
let lista_numeros = [1, 2, 33, 9, 5, 6, 2, 1, 0, 3];
let lista_reversa = [];

// Processamento 1
for(let i = lista_numeros.length - 1; i >= 0; i--){
    lista_reversa.push(lista_numeros[i]);
}

// Saída 1
console.log("Lista de Números: " + lista_numeros);
console.log("Lista Reversa: " + lista_reversa);

console.log("--------------------------------------------------");

// Processamento 2
lista_reversa = [];
// Usar o método reverse() para inverter a lista
lista_reversa = lista_numeros.reverse();

// Saída 2
console.log("Lista de Números: " + lista_numeros);
console.log("Lista Reversa: " + lista_reversa);