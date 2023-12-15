/*
Autor: Mário de Araújo Carvalho
Descrição: Esse código é um exemplo do uso de listas. 
Data: 27/11/2023
E-mail: mario.carvalho@ufms.br
*/

var lista_compras_supermercado = ["Sabão", "Detergente", "Pão", "Leite", "Manteiga"];
var lista_frutas = ["Banana", "Maçã", "Uva", "Pera", "Melancia"];
var lista_primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
var lista_pesos = [55.5, 60.3, 70.2, 80.1, 90.0];
var lista_booleanos = [true, false, false, true, false];
var lista_mista = ["Mário", 3, 5.5, true, false, "Carvalho"];

console.log(lista_compras_supermercado);
console.log(lista_frutas);
console.log(lista_primos);
console.log(lista_pesos);
console.log(lista_booleanos);
console.log(lista_mista);


// Crie 3 objetos pessoa com nome e idade
var pessoa1 = {nome: "Mário", idade: 33};
var pessoa2 = {nome: "Maria", idade: 30};
var pessoa3 = {nome: "João", idade: 50};

var lista_pessoas = [pessoa1, pessoa2, pessoa3];
console.log(lista_pessoas);

var lista_lista = [lista_compras_supermercado, lista_frutas, lista_primos, lista_pesos, lista_booleanos, lista_mista];  
console.log(lista_lista);


var lista_pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
var lista_impares = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
var soma_lista = lista_pares + lista_impares;
console.log(soma_lista);