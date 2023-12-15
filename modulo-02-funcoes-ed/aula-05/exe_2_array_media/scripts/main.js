/*
Autor: Mário de Araújo Carvalho
Descrição:  Média de Elementos: Calcule a média dos elementos de um array
numérico.
Data: 07/12/2023
E-mail: mario.carvalho@ufms.br
*/

// Entrada 
let lista_numeros = [9, 9, 10, 7, 10];
let soma = 0;
let media = 0;
let n_elementos = lista_numeros.length;

// Processamento
for(let i = 0; i < n_elementos; i++){
    soma = soma + lista_numeros[i];
}

media = soma / n_elementos;

// Saída
console.log("Lista de Números: " + lista_numeros);
console.log("Média dos Números: " + media);

console.log("--------------------------------------------------");

// Entrada
lista_numeros = [9, 9, 10, 7, 10];
soma = 0;
media = 0;
n_elementos = lista_numeros.length;

// Processamento: Usando o método reduce()
soma = lista_numeros.reduce((a, b) => a + b, 0);
// 9, 9, 10, 7, 10
// 18, 10, 7, 10
// 28, 7, 10
// 35, 10
// 45

media = soma / n_elementos;

// Saída
console.log("Lista de Números: " + lista_numeros);
console.log("Média dos Números: " + media);
